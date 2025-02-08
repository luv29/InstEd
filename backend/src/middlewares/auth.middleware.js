import asyncHandler from "../utils/asyncHandler.js";
import jwt from "jsonwebtoken";
import User from "../models/user.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";

export const verifyUser = asyncHandler(async (req, res, next) => {
    try {
        const token = req.cookies?.token
    
        if(!token) {
            res.status(401)
            throw new Error("Unauthorized request")
        }
    
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    
        const user = await User.findById(decodedToken?._id).select("-password");
    
        if(!user) {
            throw new Error("Invalid Token")
        }
    
        req.user = user;
        next()
    } 
    catch (error) {
        res.status(401)
        throw new Error(error?.message || "Invalid Access Token");    
    }
})