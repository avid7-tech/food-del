import "dotenv/config"
import dotenv from 'dotenv'; 
import express from "express";
import cors from "cors";
import {connectDB} from "./config/db.js";
import foodRouter from "./routes/foodRoute.js"
import userRouter from './routes/userRoute.js';
import cartRouter from "./routes/cartRoute.js"
import orderRouter from "./routes/orderRoute.js"
import cors from "./config/cors.js"

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
app.use("/images", express.static('uploads'))
app.use("/api/food", foodRouter);
app.use("/api/user", userRouter);
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
