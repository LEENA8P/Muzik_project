// index.js

const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const User = require("./models/User");
require("dotenv").config();
const cors = require("cors");

const authRoutes = require("./routes/auth");
const songRoutes = require("./routes/song");
const playlistRoutes = require("./routes/playlist");

const port = 8000;
const app = express();

app.use(cors());
app.use(express.json());

// Connect MongoDB to our Node app
mongoose
  .connect(`mongodb+srv://leenapawar574:${process.env.MONGO_PASSWORD}@spotify.3tuy1kg.mongodb.net/?retryWrites=true&w=majority&appName=spotify`)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Error while connecting to MongoDB:", err);
  });

// Authentication using passport JWT
let opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.JWT_SECRET || "THISissecret";

passport.use(
  new JwtStrategy(opts, async (jwt_payload, done) => {
    try {
      const user = await User.findOne({ _id: jwt_payload.identifier });
      if (user) {
        return done(null, user);
      } else {
        return done(null, false);
      }
    } catch (err) {
      return done(err, false);
    }
  })
);

// Route to check if server is running
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/auth", authRoutes);
app.use("/song", songRoutes);
app.use("/playlist", playlistRoutes);

// Start the server
app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
