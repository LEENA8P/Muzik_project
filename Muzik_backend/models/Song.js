const mongoose = require("mongoose");
// how to create a modle 
// 1) create a mongoose schema 

const Song = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    thumbnail:{
        type: String,
        required: true,
    },
    track: {
        type: String,
        required: true,
    },
    artist: {
        type: mongoose.Types.ObjectId,
        ref: "user",
        
    },
    
});

const SongModel = mongoose.model("Song", Song);

module.exports = SongModel;