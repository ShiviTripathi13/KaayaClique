require('dotenv').config();
const authdb = require('../model/authSchema.js');
const {hashPassword, comparePassword} = require('../helpers/authHelper');
const JWT = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET || require('../config/keys.js').JWT_SECRET;

const registerController = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            return res.send({ message: "Please fill all the fields" });
        }
        // check if user already exists
        const user = await authdb.findOne({ email });
        if (user) {
            return res.status(200).send({
                succcess: false,
                message: "User already exists. Please login!",
            });
        }
        // hash the password
        const hashedPassword = await hashPassword(password);
        // create new user
        const newUser = await new authdb({
            name,
            email,
            password: hashedPassword,
        });
        await newUser.save();
        
        res.status(201).send({
            success: true,
            message: "User registered successfully",
            newUser,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Something went wrong in registration",
            error,
        });
    }
}

const loginController = async (req, res) => {
    try{
        const {email, password} = req.body;
        if(!email || !password){
            return res.status(404).send({
                success: false,
                message: "Please fill all the fields"
            });
        }
        const user = await authdb.findOne({email});
        if(!user){
            return res.status(404).send({
                success: false,
                message: "User not found. Please register!",
            });
        }
        const isMatch = await comparePassword(password, user.password);
        if(!isMatch){
            return res.status(200).send({
                success: false,
                message: "Invalid password. Please try again!",
            });
        }
        const token = JWT.sign({_id: user._id}, JWT_SECRET, {expiresIn: "7d"});
        res.status(200).send({
            success: true,
            message: "User logged in successfully",
            user: {
                name: user.name,
                email: user.email,
                
            },
            token
        });
    }
    catch(err){
        console.log(err);
        res.status(500).send({
            success: false,
            message: "Something went wrong in login",
            err
        });
    }
}

const testController = (req, res) => {
    res.send("protected router");
}

module.exports = {registerController, loginController, testController}
    