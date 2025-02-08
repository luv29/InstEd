import User from "../models/user.model.js";

export const getOrCreateGoogleUser = async (email, firstname, lastname) => {
    try {
        const userExists = await User.findOne({ email })

        if (userExists) {

            userExists.isVerified = true

            await userExists.save();

            return userExists

        }

        const user = await User.create({
            firstname,
            lastname,
            email,
            isVerified: true,
            isGoogle: true,
        })

        if (user) {
            return user
        }

    } catch (error) {
        throw new Error(error)
    }
}

export const fetchUserInfo = async (accessToken) => {
    const response = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    });

    if (response.ok) {
        const userInfo = await response.json();
        return userInfo;
    } else {
        console.log(response.statusText)
        throw new Error('Error fetching user info:', response.statusText);
    }
};