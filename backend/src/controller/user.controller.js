import User from '../models/user.model.js';
import bcrypt from 'bcryptjs';
import jwt from "jsonwebtoken";
import { generateToken } from '../utils/token.js';
import asyncHandler from '../utils/asyncHandler.js';
import { ApiResponse } from '../utils/ApiResponse.js';
import { sendMessage } from '../utils/sendMessage.js';
import { OAuth2Client } from 'google-auth-library';
import { fetchUserInfo, getOrCreateGoogleUser } from '../utils/googleAuth.js';
import axios from "axios";

export const signUp = asyncHandler(async (req, res) => {
  const {firstname, lastname, phoneNumber, password} = req.body;

  if(!firstname || !lastname || !phoneNumber || !password) {
    res.json(new ApiResponse(400, "Please add all fields"));
  }
  
  let userExists = await User.findOne({phoneNumber})
  const verifyCode = Math.floor(100000 + Math.random()*900000).toString()
  const expiryDate = new Date()
  expiryDate.setHours(expiryDate.getHours() + 1)
  
  if(userExists) {
    if(userExists.isVerified) {
      console.log("User aldready exists!");
      res.json(new ApiResponse(400, "User aldready exists"))
    }
    else {
      const hashedPassword = await bcrypt.hash(password, 10)
      userExists.password = hashedPassword
      userExists.firstname = firstname
      userExists.lastname = lastname
      userExists.verifyCode = verifyCode
      userExists.verifyCodeExpiry = expiryDate
      await userExists.save()
    }
  }
  else {
    const hashedPassword = await bcrypt.hash(password, 10)
    
    const user = await User.create({
      firstname,
      lastname,
      phoneNumber,
      password: hashedPassword,
      verifyCode,
      verifyCodeExpiry: expiryDate
    })
    
    if (!user) {
      res.json(new ApiResponse(400, "Invalid user data"));
    }
    userExists = user
  }
  
  sendMessage(phoneNumber, `The verification code to create your InstED account is ${verifyCode}. If you did not registered, ignore this message.`)
  
  const token = generateToken(userExists._id, '1h')
  
  const options = {
    httpOnly: true,
    secure: true
  }
  
  return res
  .cookie("token", token, options)
  .status(201)
  .json(new ApiResponse(201, "User Registered Successfully. Please verify your phone number", userExists))
})

export const signUpVerifyOTP = asyncHandler(async (req, res) => {
  try {
    const { otp } = req.body;
    const user = req.user
    
    if (!user) {
        res.status(401)
        throw new Error("Unauthorized request")
      }
  
      if (user.isVerified) {
        res.status(401)
        throw new Error("User already verified")
      }
  
      if (!otp) {
        res.status(401)
        throw new Error("OTP is required")
      }
  
      if (otp != user.verifyCode) {
        return res
          .json(new ApiResponse(401, "Incorrect OTP!"))
      }
  
      if (Date.now() > user.verifyCodeExpiry) {
        return res
          .json(new ApiResponse(401, "OTP is expired! Resend the OTP."))
      }
  
      user.isVerified = true;
      await user.save();
  
      const newUser = await User.findByIdAndUpdate(
        user._id,
        {
          $unset: {
            verifyCode: 1,
            verifyCodeExpiry: 1
          }
        },
        {
          new: true
        }
      ).select("-password")
  
      const options = {
        httpOnly: true,
        secure: true
      }
  
      return res
        .clearCookie("token", options)
        .status(201)
        .json(new ApiResponse(201, "User verified successfully", newUser))
    } catch (error) {
      res.status(501)
      throw new Error(error.message)
    }
})

export const resendOTP = asyncHandler(async (req, res) => {
try {
    const user = req.user

    if (!user) {
    res.status(401)
    throw new Error("Unauthorized request")
    }

    const verifyCode = Math.floor(100000 + Math.random() * 900000).toString()
    const expiryDate = new Date()
    expiryDate.setHours(expiryDate.getHours() + 1)

    const newUser = await User.findByIdAndUpdate(
    user._id,
    {
        $set: {
        verifyCode: verifyCode,
        verifyCodeExpiry: expiryDate
        }
    },
    {
        new: true
    }
    ).select("-password")
    
    sendMessage(user.phoneNumber, `The verification code to create your InstED account is ${verifyCode}. If you did not registered, ignore this message.`)

    return res
    .status(201)
    .json(new ApiResponse(201, "OTP is sent again.", newUser))
} catch (error) {
    res.status(501)
    throw new Error(error.message)
}
})

export const signUpInterests = asyncHandler(async (req, res) => {
  try {
    const {interests} = req.body
    let aires = await axios.post(`${process.eventNames.AI_BACKEND_URI}/add-usr`, {
      preferences: interests
    }) 

    await User.findByIdAndUpdate(req.user._id, {
      $set: {
        aid: aires.id
      }
    })

    aires = await axios.get(`${process.env.AI_BACKEND_URI}/train`)

    return res
      .json(new ApiResponse(201, "User preferences added!"))
  } catch(error) {
    res.status(501)
    throw new Error(error.message)
  }
})

export const signUpInfo = asyncHandler(async (req, res) => {
  try {
    const {bio, educationLevel} = req.body

  } catch(error) {
    res.status(501)
    throw new Error(error.message)
  }
})

export const signIn = asyncHandler(async (req, res) => {
  try {
    const {username, phoneNumber, password} = req.body;
    
    if(!username && !phoneNumber) {
        throw new Error(400, "username or phone number is required!");
    }

    const user = await User.findOne({
        $or: [{ username }, { phoneNumber }]
    })

    if(!user) {
      res.json(new ApiResponse(404, "User not found!"))
    }

    if(!user.password) {
      res.json(new ApiResponse(401, "Password not set!"))
    }
    
    if(user && user.isVerified && (await bcrypt.compare(password, user.password))) {
      const token = generateToken(user._id)
  
      const options = {
        httpOnly: true,
        secure: true
      }
  
      return res
        .status(201)
        .cookie("token", token, options)
        .json(new ApiResponse(201, "User logged in successfully.", user))
    } else {
      return res.json(new ApiResponse(401, 'Invalid username or password '))
    }
  } catch (error) {
    res.status(401)
    throw new Error(error)
  }
})

export const forgotPassword = asyncHandler(async (req, res) => {
    try {
        const {username, phoneNumber} = req.body;
        
        if(!username && !phoneNumber) {
            throw new Error(400, "username or phone number is required!");
        }

        const user = await User.findOne({
            $or: [{ username }, { phoneNumber }]
        })

        if(!user) {
        res.json(new ApiResponse(404, "User not found!"))
        }
        
        const verifyCode = Math.floor(100000 + Math.random() * 900000).toString()
        const expiryDate = new Date()
        expiryDate.setHours(expiryDate.getHours() + 1)

        const newUser = await User.findByIdAndUpdate(
        user._id,
        {
            $set: {
            verifyCode: verifyCode,
            verifyCodeExpiry: expiryDate
            }
        },
        {
            new: true
        }
        ).select("-password")
        
        sendMessage(newUser.phoneNumber, `The verification code to create your InstED account is ${verifyCode}. If you did not registered, ignore this message.`)
  
        const token = generateToken(newUser._id, '1h')
    
        const options = {
            httpOnly: true,
            secure: true
        }
    
        return res
            .status(201)
            .cookie("token", token, options)
            .json(new ApiResponse(201, "User found.", newUser))
    } catch (error) {
      return res.json(new ApiResponse(501, error.message || "Error while fetching user", error))
    }
})

export const forgotPasswordOTP = asyncHandler(async (req, res) => {
try {
    const { otp } = req.body;

    if(!otp) {
    throw new Error("All fields are required!")
    }

    const user = req.user

    if(!user || !user.isVerified) {
    throw new Error("User does not exist!")
    }

    if(user.verifyCode != otp) {
    return res.json(new ApiResponse(401, "Incorrect OTP!"))
    }

    if(Date.now() > user.verifyCodeExpiry) {
    return res.json(new ApiResponse(401, "OTP is expired, request a new OTP."))
    }

    user.canChangePassword = true;
    await user.save();

    const newUser = await User.findByIdAndUpdate(
    user._id,
    {
        $unset: {
        verifyCode: 1,
        }
    },
    {
        new: true
    }
    ).select("-password")

    return res
    .status(201)
    .json(new ApiResponse(201, "User authenticated successfully.", newUser))
} catch (error) {
    return res.json(new ApiResponse(501, "Error while verifying OTP", error))
}
})

export const resetPassword = asyncHandler(async (req, res) => {
try {
    const { password } = req.body;

    if(  !password) {
    throw new Error("All fields are required!")
    }

    const user = req.user

    if(!user || !user.isVerified) {
    throw new Error("User does not exist!")
    }

    if(!user.canChangePassword) {
    throw new Error("User not authenticated!")
    }
    
    if(Date.now() > user.verifyCodeExpiry) {
    return res.json(new ApiResponse(401, "Session timed out, user re-authentication required."))
    }

    user.password = await bcrypt.hash(password, 10)
    await user.save()
    
    const newUser = await User.findByIdAndUpdate(
    user._id,
    {
        $unset: {
        canChangePassword: 1,
        verifyCodeExpiry: 1
        }
    },
    {
        new: true
    }
    ).select("-password")
    const options = {
    httpOnly: true,
    secure: true
    }

    return res
    .status(201)
    .clearCookie("token", options)
    .json(new ApiResponse(201, "Password reset successfull.", newUser))
} catch(error) {
    return res.json(new ApiResponse(501, "Error while resetting password", error))
}
})

export const signOut = asyncHandler(async (req, res) => {
  const options = {
    httpOnly: true,
    secure: true
  }

  return res
    .status(200)
    .clearCookie("token", options)
    .json(new ApiResponse(200, "User Logged Out"))
})

const googleClient = new OAuth2Client(process.env.VITE_GOOGLE_CLIENT_ID)
export const googleCallback = asyncHandler(async (req, res) => {
  const {token} = req.body;

  console.log(token)
  
  try {
    const userInfo = await fetchUserInfo(token)

    const { email, given_name, family_name } = userInfo

    const user = await getOrCreateGoogleUser(email, given_name, family_name);

    if (user && user.isVerified) {
      const token = generateToken(user._id)

      const options = {
        httpOnly: true,
        secure: true,
        sameSite: "none"
      }
      return res
        .cookie("token", token, options)
        .status(201)
        .json(new ApiResponse(201, "Google User logged in successfully.", user))
    } else {
      res.status(501)
      throw new Error('Error Authenticating Google profile')
    }
  } catch (error) {
    console.log(error)
    throw new Error(error);
  }
})

export const verifyUserRedux = asyncHandler(async (req, res) => {
  try {
      const token = req.cookies?.token
  
      if(!token) {
        return res.json(new ApiResponse(404, "Token not present!"))
      }
      
      const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
      
      const user = await User.findById(decodedToken?._id).select("-password");
      
      if(!user) {
        return res.json(new ApiResponse(404, "Invalid Token!"))
      }
  
      res.json(new ApiResponse(200, user._id))
  } 
  catch (error) {
      res.status(401)
      throw new Error(error?.message || "Invalid Access Token");    
  }
})