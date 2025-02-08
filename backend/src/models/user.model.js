import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
    firstname: {
        type: String,
        required: [true, 'Please add first name']
    },
    lastname: {
        type: String,
        required: [true, 'Please add last name']
    },
    username: {
        type: String
    },
    phoneNumber: {
        type: String,
        required: [true, 'Please add Phone Number']
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
    }
},
{
    timestamps: true,
})

const User = mongoose.model('User', userSchema)

export default User