import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";



const connectDB = async() => {
  try {
   const connectionInstce= await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
   console.log(`\n MongoDB connected to database: ${connectionInstce.connection.name}`);
  } catch (err) {
    console.error("MongoDB connection error:", err);
  }
}


export default connectDB;