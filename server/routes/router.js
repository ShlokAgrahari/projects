const express = require("express");
const router = new express.Router();
const Products = require("../models/productSchema");
const USER = require("../models/userSchema");
const bcrypt = require("bcryptjs");

// Get all products
router.get("/getproducts", async (req, res) => {
    try {
        const productsdata = await Products.find();
        res.status(201).json(productsdata);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: "Error fetching products" });
    }
});

// Get individual product by ID
router.get("/getproductsone/:id", async (req, res) => {
    try {
        const { id } = req.params;
        console.log(id);
        const individualdata = await Products.findOne({ id: id });
        console.log(individualdata);
        if (!individualdata) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.status(201).json(individualdata);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: "Error fetching product" });
    }
});

// User registration
router.post("/register", async (req, res) => {
    const { fname, email, mobile, password, repassword } = req.body;
    console.log(req.body);

    // Validate request body
    if (!fname || !email || !mobile || !password || !repassword) {
        return res.status(422).json({ error: "Please fill all the fields" });
    }

    if (password !== repassword) {
        return res.status(422).json({ error: "Passwords do not match" });
    }

    try {
        // Check if user already exists
        const userExist = await USER.findOne({ email: email });
        if (userExist) {
            return res.status(422).json({ error: "Email already exists" });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 12);

        // Create a new user
        const newUser = new USER({
            fname,
            email,
            mobile,
            password: hashedPassword, // Save hashed password
        });

        // Save user to the database
        await newUser.save();

        res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: "Registration failed" });
    }
});

module.exports = router;
