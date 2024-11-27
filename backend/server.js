import express from "express";
import dotenv from "dotenv";
import cookieParser from 'cookie-parser'

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";

const app = express();
const PORT =process.env.PORT || 5000;

dotenv.config()

app.use(express.json()); //to parse the incoming requests with JSON pauloads (from re.body)
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

// Add a route for '/'
app.get('/', (req, res) => {
    res.send('Welcome to the ChatApp API');
});

app.listen(PORT, () =>{
    connectToMongoDB();
    console.log(`Server Running on port ${PORT}`)
});