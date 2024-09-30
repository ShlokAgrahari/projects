// app.js
const express = require("express");
const connectDB = require("./db/conn"); // Import the connection function
const Products=require("./models/productSchema");
const DefaultData=require("./defaultdata");
const cors=require("cors");
const router=require("./routes/router")

const app = express();
const port = 8005;

app.use(express.json());
app.use(cors());
app.use(router);
connectDB();

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


DefaultData();