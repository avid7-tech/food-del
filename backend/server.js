// DEPENDENCIES
// express -> 
// mongoose -> help us connect to the database
// jsonwebtoken -> authentication system
// bcrypt -> encrypt user's data and store it in the database
// cors -> gives permission to our fronted to connect with backend
// dotenv -> use environment variables
// multer -> create image store system
// stripe -> add paymeny gateways on webpage
// validator -> check email id or password validity
// nodemon -> using this when we save our project, server is restarted

// password(ATLAS) -> GveTft0dzEL0f0Lr
// mongodb+srv://avdheshojha7:GveTft0dzEL0f0Lr@clusterfirst.spee3gr.mongodb.net/?       retryWrites=true&w=majority&appName=ClusterFirst
import "dotenv/config"
import dotenv from 'dotenv'; 
import express from "express";
import cors from "cors";
import {connectDB} from "./config/db.js";
import foodRouter from "./routes/foodRoute.js"
import mongoose from 'mongoose';
import userRouter from './routes/userRoute.js';
import cartRouter from "./routes/cartRoute.js"
import orderRouter from "./routes/orderRoute.js"

dotenv.config();

// app config
const app = express();
const port = process.env.PORT || 4000;

// add middleware
// request from frontend to backend, that will be parsed using this json
app.use(express.json());
app.use(cors());

// Call connectDB function to establish MongoDB connection
connectDB();
// api end point
app.use("/api/food", foodRouter);
app.use("/images", express.static('uploads'));
app.use("/api/user", userRouter);
app.use("/images",express.static('uploads'))
app.use("/api/cart", cartRouter)
app.use("/api/order",orderRouter)

// using this we can request the data from the server
app.get("/", (req, res)=>{
    res.send("API Working!");
});

// to run express server, we use
app.listen(port, ()=>{
    console.log(`Server listening on http://localhost:${port}`);
});
