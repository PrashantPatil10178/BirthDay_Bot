const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({
  path: "./.env",
});

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `mongodb+srv://Prashant178:Prashant178@test.nbiivqk.mongodb.net/Test`
    );

    console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance}`);
  } catch (error) {
    console.log("MONGODB connection error ", error);
    process.exit(1);
  }
};

module.exports = connectDB;
