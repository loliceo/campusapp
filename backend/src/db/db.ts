import mongoose from "mongoose";
const { Schema } = mongoose
import { config } from "dotenv";

config();
mongoose.connect(process.env.MONGO_DB_URL || "");

const userSchema = new Schema({
    uid : String,
    email : { type: String, required: false },
    password : String,
    name : String,
    timetable : {
        Mon : {
            type : Map,
            of: String
        },
        Tue : {
            type : Map,
            of: String
        },
        Wed : {
            type : Map,
            of: String
        },
        Thu : {
            type : Map,
            of: String
        },
        Fri : {
            type : Map,
            of: String
        },
        Sat : {
            type : Map,
            of: String
        },
        Sun : {
            type : Map,
            of: String
        }
    }
})

export const User = mongoose.model("User", userSchema);
