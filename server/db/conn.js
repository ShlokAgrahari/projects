require("dotenv").config(); 
const mongoose = require("mongoose");

const DB = process.env.DATABASE;

const connectDB = async () => {
    try {
        await mongoose.connect(DB, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            dbName: "Amazonweb" // Add this line to specify the correct database
        });
        console.log("Database connected");
    } catch (error) {
        console.error("Error connecting to the database: " + error);
    }
};

module.exports = connectDB;
