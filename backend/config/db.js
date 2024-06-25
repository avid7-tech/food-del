import mongoose, { mongo } from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://foodel:<password>@cluster0.rdespwv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then(()=>console.log('DB Connection established'));
}


