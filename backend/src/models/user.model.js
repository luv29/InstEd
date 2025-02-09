import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
    firstname: {
        type: String,
        required: [true, 'Please add first name']
    },
    lastname: {
        type: String,
    },
    username: {
        type: String
    },
    phoneNumber: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String,
        default: null,
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    isGoogle: {
        type: Boolean
    },
    verifyCode: {
        type: Number
    },
    verifyCodeExpiry: {
        type: Date
    },
    canChangePassword: {
        type: Boolean
    },
    rank: {
        type: Number
    },
    points: {
        type: Number
    },
    questionsSolved: {
        type: Number
    },
    questionCorrectlySolved: {
        type: Number
    },
    educationLevel: {
        type: String
    },
    profileImage: {
        type: String
    }
    bio: {
        type: String
    },
    followers: {
        type: Number
    },
    following: {
        type: Number
    },
    aid: {
        type: Number
    }
},
{
    timestamps: true,
})

const User = mongoose.model('User', userSchema)

export default User