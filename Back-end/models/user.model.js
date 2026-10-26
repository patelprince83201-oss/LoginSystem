

    import "dotenv/config";
import mongoose from "mongoose";

const userschema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

const usermodel = mongoose.model(process.env.MONGODB_COLLECTION_NAME, userschema);

export default usermodel;
