# InstEd

This is a simple guide to setting up and running the application.

## Prerequisites
Before you start, make sure you have the following installed:
- [Node.js](https://nodejs.org/) (LTS version recommended)
- [Python](https://www.python.org/downloads/) (3.12 or later)

## Getting Started
Follow these steps to set up and run the app locally.

### 1. Clone the Repository
```sh
git clone https://github.com/luv29/InstEd.git
cd InstEd
```

### 2. Set Up Environment Variables
Create a `.env` file in the root of the project and add the necessary environment variables:

```sh
touch .env
```

Edit `.env` and add the environment variables provided in .env.sample file

### 3. Install Dependencies
Navigate to the required directories and install dependencies:

#### Frontend:
```sh
cd frontend
npm install
```

#### Backend:
```sh
cd ../backend
npm install
```

#### AI Backend:
```sh
cd ../AI-ML
pip install -r requirements.txt
```

### 4. Start the FastAPI AI Backend
Navigate to the `ai-backend` directory and run:
```sh
python app.py
```

### 5. Start the Backend Server
Navigate to the backend directory and run:
```sh
cd ../backend
npm run server
```

### 6. Start the Frontend Server
Navigate to the frontend directory and run:
```sh
cd ../frontend
npm run dev
```

### 7. Access the Application
Once all servers are running, you can access the application at:
```
http://localhost:5173
```
(or the port specified in your frontend configuration)
