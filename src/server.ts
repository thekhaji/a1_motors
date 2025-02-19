import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();

mongoose.connect(process.env.MONGO_URL as string, {})
    .then((data) => {
        console.log("MongoDB connection succeed!");
        const PORT = process.env.PORT;
    })
    .catch((err)=>console.log("Error on connection MongoDB ", err));



