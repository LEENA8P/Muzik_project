const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const {getToken} = require("../utils/helpers");
// this post route will help to register a user 
router.post("/register", async (req, res)=>{
        // this code is run when the /register api is called Post request
        // My req.body will be of the  format (email, password , first name , last name , user name  )
        const {email, password, firstName, lastName , username}= req.body;
        console.log('Request Body:', req.body);
        console.log('Extracted Password:', password);
        // step 2 - we check if if a user with this email already exsist , if yes we wont allow 
        const user = await User.findOne({email:email});
        if(user){
           
            return res
            .status(403)
            .json({error:"a user with this name already exsist"});

        }
        // if false then this is a valid request 
        // step 3 : create a new user in the DB
        // we donot store password in plain text 
        console.log('Password:', password);
        console.log('Salt rounds:', 10);
        const hashedPassword =  await bcrypt.hash(password,10);
        const newUserData = {
            email,
            password: hashedPassword, 
            firstName, 
            lastName, 
            username
        };
        const newUser= await User.create(newUserData);

        // step 4  we create a token to return to the user 
        const token = await getToken(email, newUser);
        //step 5  return the result to the user 
        const userToReturn = {...newUser.toJSON(), token};
        delete userToReturn.password;
        return res.status(200).json(userToReturn);

});
router.post("/login", async (req,res)=>{
 // step 1 get email and password sent by the user from req.body
    const {email,password}= req.body;
 //step 2 check if a user with the given email exsist . if not , the credentials are 
    const user = await User.findOne({email:email});
     if(!user){
        return res.status(403).json({err: "Invalid credentials"});
     }
 // step 3 if the user exsist , check if the password is correct . If not ,
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if(!isPasswordValid){
        return res.status(403).json({err: "Invalid credentials"});
    }
 // step 4 if credentails are correct , return a token to the user.
   const token = await getToken(user.email, user);
   const userToReturn = {...user.toJSON(), token};
   delete userToReturn.password;
   return res.status(200).json(userToReturn);

});

module.exports = router;

