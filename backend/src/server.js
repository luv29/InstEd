import dotenv from "dotenv";

dotenv.config({
    path: "../.env", 
});


import connectDB from "./config/index.js"; 
const startServer = async () => {
    try {
        await connectDB();

        const { app, server } = await import("./app.js");
        const port = process.env.VITE_BACKEND_PORT || 3000; 

        server.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    } catch (error) { 
        console.error(error);
        process.exit(1);
    }
};

startServer();
