import mongoose, { mongo } from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://avdheshojha7:GveTft0dzEL0f0Lr@clusterfirst.spee3gr.mongodb.net/food-del').then(()=>console.log('DB Connection established'));
}
