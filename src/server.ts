import dotenv from "dotenv";
import mongoose from "mongoose";
import app from "./app";
dotenv.config();

mongoose.connect(process.env.MONGO_URL as string, {})
    .then((data) => {
        console.log("MongoDB connection succeed!");
        const PORT = process.env.PORT;
        app.listen(PORT, function(){
            console.info(`The server is running successully on port: ${PORT}`);
            console.info(`Admin project on http://localhost:${PORT}/admin \n`);
        })
    })
    .catch((err)=>console.log("Error on connection MongoDB ", err));



