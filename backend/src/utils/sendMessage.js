import Twilio from 'twilio';

export const sendMessage = async (to, content) => {
    try {
        const client = Twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTHTOKEN);
    
        await client.messages
            .create({
                body: content,
                from: process.env.TWILIO_PHONE_NUMBER,
                to
            });
    }
    catch(error) {
        console.log(error)
    }
}