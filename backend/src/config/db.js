import mongoose, { connect, Mongoose } from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);

        console.log("Mongodb connected successfully!");
    } catch (error) {
        console.error("Error connecting to mongodb ", error);
    }
};