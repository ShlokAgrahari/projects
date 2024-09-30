const mongoose = require("mongoose");
// validator
const validator = require("validator");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate(val) {
            if (!validator.isEmail(val)) {
                throw new Error("NOT A VALID EMAIL ADDRESS");
            }
        },
    },
    mobile: {
        type: String,
        required: true,
        unique: true,
        minlength: 10,
        maxlength: 10,  // Ensure mobile has exactly 10 digits
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
    },
    tokens: [
        {
            token: {
                type: String,
                required: true,
            },
        },
    ],
    carts: Array,
});

// Hash the password before saving
userSchema.pre("save", async function (next) {
    if (this.isModified("password")) {  // Fixed typo here
        this.password = await bcrypt.hash(this.password, 12);
    }
    next(); // Continues to the next middleware
});

const USER = mongoose.model("USER", userSchema);

module.exports = USER;
