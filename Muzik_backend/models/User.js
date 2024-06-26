const mongoose = require("mongoose");
// how to create a modle 
// 1) create a mongoose schema 

const User = new mongoose.Schema({
    firstName:{
        type: String,
        required: true,
    },
    password: {
        type : String,
        required: true,
        private: true,
    },
    lastName:{
        type: String,
        required: false,
    },
    email: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    likedSongs: {
        type: String,
        default : "",

    },
    likedPlaylist:{
        type: String,
        default : "",
    },
    subscribedArtist:{
        type: String,
        default : "",
    },
});

const UserModel = mongoose.model("User", User);

module.exports = UserModel;