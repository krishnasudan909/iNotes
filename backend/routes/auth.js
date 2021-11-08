require("dotenv").config();
const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const fetchuser = require('../middleware/fetchuser');

const jwtSecret =  `${process.env.JWT_SECRET}`;



//Route 1: Create a user using : POST "/api/auth/createuser" and No Login required
router.post('/createuser', [
    body('fName', 'Enter a valid First name').isLength({ min: 2 }),
    body('email', 'Enter a valid email').isEmail(),
    body('phoneNo', 'Enter a valid phone no').isNumeric().isLength({min: 10}),
    body('password', 'Password must be atleat 5 characters').isLength({ min: 5 })
], async (req, res) => {
    let success= false;
    //If there are errors return bad request and errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ success, errors: errors.array() });
    }
    try {
        // check whether the user with this email exist already
        let user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.status(400).json({ success, error: "Sorry a user with this email already exists" });
        }
        user = await User.findOne({ phoneNo: req.body.phoneNo });
        if (user) {
            return res.status(400).json({ success, error: "Sorry a user with this Phone Number already exists" });
        }
        const salt = await bcrypt.genSalt(10);
        const secretPass = await bcrypt.hash(req.body.password, salt);

        //Creating a user
        user = await User.create({
            fName: req.body.fName,
            lName: req.body.lName,
            phoneNo: req.body.phoneNo,
            email: req.body.email,
            password: secretPass
        });
        const data = {
            user: {
                id: user.id
            }
        }
        success = true;
        const authToken = jwt.sign(data, jwtSecret)
        res.json({ success,authToken });
    }
    //Catching the errors
    catch (error) {
        console.log(error.message);
        res.status(500).send("Internal Server Error");
    }
});


//Route 2: Authenticate a user using : POST "/api/auth/login" and No Login required

router.post('/login', [
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password cannot be blank').exists()
], async (req, res) => {
    let success= false;
    //If there are errors return bad request and errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;
    try {
        let user = await User.findOne({ email });
        if (!user) {
            res.status(400).json({ error: "Please try to login with correct credentials" });
        }

        const passwordCompare = await bcrypt.compare(password, user.password);
        if (!passwordCompare) {
            res.status(400).json({ success, error: "Please try to login with correct credentials" });
        }

        const data = {
            user: {
                id: user.id
            }
        }
        const authToken = jwt.sign(data, jwtSecret)
        success = true;
        res.json({ success,authToken });

    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal Server Error");
    }
})

// Route 3 : Get Logged In User Details using : POST "/api/auth/getuser" and Login required

router.post('/getuser', fetchuser, async (req, res) => {

    try {
        const userId = req.user.id;
        const user = await User.findById(userId).select("-password");
        res.send(user);
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal Server Error");
    }

});

module.exports = router;