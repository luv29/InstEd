import jwt from "jsonwebtoken";

let ioInstance;
const userSockets = new Map(); 

export const setupSocket = (io) => {
  ioInstance = io;

  io.on("connection", (socket) => {
    console.log(`New connection attempt from ${socket.id}`);

    try {
      const cookieHeader = socket.request.headers.cookie;
      if (!cookieHeader) throw new Error("No cookies found");

      const cookies = Object.fromEntries(
        cookieHeader.split("; ").map((c) => c.split("="))
      );

      const token = cookies.token;
      if (!token) throw new Error("No token provided");

      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      socket.user = decoded;

      userSockets.set(decoded, socket);

      console.log(`User authenticated: ${decoded} (${socket.id})`);
    } catch (err) {
      console.log(`Authentication failed for ${socket.id}: ${err.message}`);
      socket.emit("authError", "Unauthorized: Please log in first");
      socket.disconnect();
      return;
    }

    socket.on("disconnect", () => {
      console.log(`User disconnected: ${socket.user?.username || socket.id}`);
      if (socket.user) {
        userSockets.delete(socket.user);
      }
    });
  });
};

export const getIo = () => {
  if (!ioInstance) {
    throw new Error("Socket.io is not initialized yet!");
  }
  return ioInstance;
};

export const getUserSocket = (userId) => {
  return userSockets.get(userId) || null;
};
