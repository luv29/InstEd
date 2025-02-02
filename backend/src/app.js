import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import http from 'http';
import { Server } from 'socket.io';

const app = express()
http.createServer(app)

app.use(
    cors({
        origin: process.env.CORS_ORIGIN,
        credentials: true,
    }),
);

// Creating socket.io instance
const io = new Server(Server, {
    cors: {
        origin: process.env.CORS_ORIGIN,
        methods: ["GET", "POST"],
        credentials: true,
    },
})

// Authenticating and setting up io instance
setupSocket(io);

app.use(
    express.json({
        limit: "16kb",
    }),
);

app.use(
    express.urlencoded({
        extended: true,
        limit: "16kb",
    }),
);

app.use(express.static("public"));
app.use(cookieParser());

// Attach `io` & `userSocket` to `req`
app.use((req, res, next) => {
    req.io = getIo();
    req.getUserSocket = getUserSocket
    next();
});