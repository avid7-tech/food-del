// mongoose library to interact with database
import mongoose from 'mongoose';


// Connect to the database
// 
export const connectDB = async () => {
    try {
        // to secure the mongo db URI
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('MongoDB connected');
    } catch (error) {
        console.error('MongoDB connection error:', error.message);
        process.exit(1); // Exit process with failure
    }
};

// Keeping the connection separate