const mongoose = require("mongoose");
// how to create a modle 
// 1) create a mongoose schema 

const Playlist = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    thumbnail:{
        type: String,
        required: true,
    },
    songs:[ {
        type: mongoose.Types.ObjectId,
        ref: "Song",
    },],
    owner: {
        type: mongoose.Types.ObjectId,
        ref: "user",
        
    },
    collabrators : {
        type:mongoose.Types.ObjectId,
        ref: "user",
    },
    
});

const PlaylistModel = mongoose.model("Playlist", Playlist);

module.export = PlaylistModel;