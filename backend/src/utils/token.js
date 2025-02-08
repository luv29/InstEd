import jwt from 'jsonwebtoken';

export const generateToken = (_id, expiresIn='30d', data) => {
    return jwt.sign({ _id, ...data }, process.env.JWT_SECRET, {
        expiresIn,
    })
}