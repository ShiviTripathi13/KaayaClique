const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port =  8000;
const cors = require('cors');
const bodyParser = require('body-parser');
// const cookieParser = require('cookie-parser');
require("./db/connection.js");
const process = require('process');
const session = require('express-session');
const passport = require('passport');
const OAuth2Strategy = require('passport-google-oauth2').Strategy;
const userdb = require('./model/userSchema.js');
const GOOGLE_CLIENT_ID = require('./config/keys.js').GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = require('./config/keys.js').GOOGLE_CLIENT_SECRET;
const EXPRESS_SESSION_SECRET = require('./config/keys.js').EXPRESS_SESSION_SECRET;

const clientid = process.env.GOOGLE_CLIENT_ID || GOOGLE_CLIENT_ID;
const clientsecret = process.env.GOOGLE_CLIENT_SECRET || GOOGLE_CLIENT_SECRET;

// importing routes
const authRoutes = require('./routes/authRoute.js');


app.use(cors(
    {
        origin: 'http://localhost:3000',
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        credentials: true
    }
));

app.use(express.json());


//auth routes
app.use('/api/v1/auth',authRoutes);

//setting up the session
app.use(session({
    secret: process.env.EXPRESS_SESSION_SECRET || EXPRESS_SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
}, {expiresIn: '10m'}));

//set up passport
app.use(passport.initialize());
app.use(passport.session());

passport.use(new OAuth2Strategy({
    clientID: clientid,
    clientSecret: clientsecret,
    callbackURL: "/auth/google/callback",
    scope: [ "profile", "email"],
    passReqToCallback: true
},
    async( request, accessToken, refreshToken, profile, done) => {
        // console.log("profile", profile);
        try{
            let user = await userdb.findOne({ googleId: profile.id });
            if(!user){
                user = new userdb({
                    googleId: profile.id,
                    displayName: profile.displayName,
                    email: profile.emails[0].value,
                    image: profile.photos[0].value,
                });
                await user.save();
            }
            

            return done(null, user);
        }
        catch(err){
            return done(null,err);
        }
    }
));

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((user, done) => {
    done(null, user);
});

app.get("/auth/google", passport.authenticate("google", { scope: ["profile", "email"] }));
app.get("/auth/google/callback", passport.authenticate("google",{
    successRedirect: "http://localhost:3000/dashboard",
    failureRedirect: "http://localhost:3000/login",
}));

app.get("/login/sucess",async(req,res)=>{
    // console.log("reqqqqq", req.user);
    if(req.user){
        res.status(200).json({message:"user Login",user:req.user})
    }else{
        res.status(400).json({message:"Not Authorized"})
    }
})

app.get("/logout",(req,res,next)=>{
    req.session.destroy(function(err){
        if(err){return next(err)}
        res.redirect("http://localhost:3000");
    })
});

app.use("/api/v1/auth",authRoutes);
// app.get("/", (req, res) => {
//     app.use(express.static(path.resolve(__dirname, "kaayaclique", "build")));
//     res.sendFile(path.resolve(__dirname, "kaayaclique", "build", "index.html"));
// });
app.listen(port, () => {
    console.log(`Server is running at port ${port}`);
});

module.exports = app;