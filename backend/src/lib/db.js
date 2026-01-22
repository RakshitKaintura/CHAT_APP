import mongoose from "mongoose";
import "dotenv/config";

export const connectDB = async () => {
  try {
    const mongoUri = process.env.MONGO_URI; // Simple assignment
    
    if (!mongoUri) {
      throw new Error("MONGO_URI is not defined in your .env file");
    }

    const conn = await mongoose.connect(mongoUri);
    console.log("✅ MONGODB CONNECTED:", conn.connection.host);
  } catch (error) {
    console.error("❌ Error connecting to MONGODB:", error.message);
    process.exit(1);
  }
};