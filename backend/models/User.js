const mongoose = require('mongoose');
const { Schema } = mongoose;

//Creating a schema for the user
const UserSchema = new Schema({
    fName: {
        type: String,
        required: true
    },
    lName: {
        type: String
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phoneNo:{
        type: Number,
        required:true,
        unique:true
    },
    password: {
        type: String,
        required: true
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
});

//Creating a module from that schema and exporting the User
const User = mongoose.model("user", UserSchema);
module.exports = User;