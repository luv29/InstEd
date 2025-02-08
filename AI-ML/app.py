from fastapi import FastAPI
import uvicorn
import pandas as pd
import pickle
from schemas.UserPreferences import UserPreferences
from schemas.UserID import UserID
import torch
import numpy as np

app = FastAPI()

@app.get('/')
def index():
    return {'message': 'Test'}

@app.post('/add-user')
def add_user(user: UserPreferences):
    df = pd.read_csv('users.csv')

    cid = df.shape[0] + 1
    user.preferences.insert(0, cid)  
    new_row = pd.DataFrame([user.preferences], columns=df.columns)

    df = pd.concat([df, new_row], ignore_index=True)

    df.to_csv('users.csv', index=False)  # This will retain the headers

    return {
        "success": True,
        "message": "User added Successfully.",
        "id": cid
    }

@app.get('/train')
def train():
    data = pd.read_csv('users.csv')
    Y = data.drop('Client ID', axis=1).to_numpy().transpose()
    R = (Y != 0).astype(np.float64)

    Y = torch.tensor(Y, dtype=torch.float64)
    R = torch.tensor(R, dtype=torch.float64)

    num_categories, num_users = Y.shape
    num_features = 100

    g = torch.Generator().manual_seed(42)

    X = torch.randn([num_categories, num_features], generator=g, requires_grad=True)
    W = torch.randn([num_users, num_features], generator=g, requires_grad=True)
    b = torch.randn([num_categories, 1], generator=g, requires_grad=True)  # Bias per category

    def cofi_cost_func_pytorch(X, W, b, Y, R, lambda_):
        diff = (torch.matmul(X, W.T) + b - Y) * R
        J = 0.5 * torch.sum(diff**2) + (lambda_ / 2) * (torch.sum(X**2) + torch.sum(W**2))
        return J

    iterations = 5000
    lambda_ = 1

    optimizer = torch.optim.Adam([X, W, b], lr=0.01)

    for iter in range(iterations):
        optimizer.zero_grad()

        cost_value = cofi_cost_func_pytorch(X, W, b, Y, R, lambda_)

        cost_value.backward()

        optimizer.step()

    
    with open('model/weight.pkl', 'wb') as file:
        pickle.dump((X, W, b), file)

    return {
        "success": True
    }
    

@app.post('/get-recommendation')
def get_recommendation(user: UserID):
    try:
        df = pd.read_csv('users.csv')
    except FileNotFoundError:
        return {'error': 'Users file not found'}
    
    try:
        row = df[df['Client ID'] == user.id].index
        if row.empty:
            return {'success': False, 'message': 'User not found'}
        
        with open('model/weight.pkl', 'rb') as file:
            X, W, b = pickle.load(file)
        
        predictions = torch.matmul(X, W.T) + b
        predictions = predictions[:, row]
        
        mapped_predictions = [(predictions[i].item(), i) for i in range(len(predictions))]
        sorted_predictions = sorted(mapped_predictions, reverse=True)
        
        return {'recommendations': [y for x, y in sorted_predictions]}
    
    except Exception as e:
        return {'error': str(e)}


if __name__ == '__main__':
    uvicorn.run(app, host='localhost', port=8000)
