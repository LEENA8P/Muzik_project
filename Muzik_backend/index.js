// npm init : package.jason -- this is a node project 
// npm i express : expressJS package install done -- we aare using express
// we finally start using express


// about Node.js 
// it is an open source server environment uses javascript on the server .
// PHP and ASP wait Node.js donot wait ???
// application programming interface API 
// Express Js is used for creating REST API . It is a framework used with Node.Js 

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const JwtStrategy = require("passport-jwt").Strategy;
    ExtractJwt = require("passport-jwt").ExtractJwt;
const passport= require("passport");
const User = require("./models/User");
require("dotenv").config();

const authRoutes = require("./routes/auth");
const songRoutes = require("./routes/song");
const playlistRoutes = require("./routes/playlist");
const port = 8000;
const app = express();
app.use(express.json());
// created a variable named express to import functionality of express in it 
// coneect mongo db to our node app
mongoose
    .connect(
                "mongodb+srv://leenapawar574:"+
                process.env.MONGO_PASSWORD +
                "@spotify.3tuy1kg.mongodb.net/?retryWrites=true&w=majority&appName=spotify",
            {
                 useNewUrlParser: true,
                 useUnifiedTopology: true,

            }
        )
        .then((x) =>{
            console.log("connected to mongo");
        })
        .catch((err)=>{
            console.log("Error while connecting to mongo ");
        });

//Authentication using passport jwt

let opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = "THISissecret";
// opts.issuer = 'accounts.examplesoft.com';
// opts.audience = 'yoursite.net';
passport.use(new JwtStrategy(opts,  async (jwt_payload, done) =>{
    try{
        const user = await User.findOne({ id: jwt_payload.sub });
        
        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
            // or you could create a new account
        }
    }catch (err){
        return done(err, false);
    }
    
}));

//variable to function 
//API : get type : / : return text "Hello World"
app.get("/", (req, res)=>{
    // req contain all data for request 
    // res contain all data for response 
    res.send("Hello World");
}); 
app.use("/auth", authRoutes);
app.use("/song", songRoutes);
app.use("/playlist", playlistRoutes);

//now we want to tell express that our server will run on 8000
app.listen(port, () => {
   console.log("App is running on port " +port );
});

// const http = require('http');

// http.createServer((req, res) => {
//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     res.write('Hello World!');
//     res.end();
// }).listen(8080);
