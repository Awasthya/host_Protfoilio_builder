const jwt = require('jsonwebtoken'); 
const User = require('../Model/userSchema');
const cookieParser = require("cookie-parser");
const express = require('express');
const app = express();
const authenticate = async(req,res,next) => {
    try {
        const token = await req.cookies.jwtoken;
        const verifytoken =  jwt.verify(token, process.env.SECRET_KEY);
        
        const rootUser = await User.findOne({ _id: verifytoken._id, "tokens.token": token });
       
        if (!rootUser)
            {
            throw new Error('User Not Found')
        }
     
        req.token = token;
        req.rootUser = rootUser;
        req.userId = rootUser._id;
        next();
    } catch (err) {
        res.status(402).send('Unauthorized ')
    }
}

module.exports = authenticate;