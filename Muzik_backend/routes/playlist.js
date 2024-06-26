const express = require("express");
const passport = require("passport");
const router = express.Router();
const Playlist = require("../models/Playlist");
const User = require("../models/User");
const Song = require("../models/Song");

// create a playlist 
router.post("/create", passport.authenticate("jwt", {session:false}),
    async (req,res)=>{
        const currentUser = req.user;
        const {name,thumbnail,songs} = req.body;
        console.log(req.body);  
        if(!name||!thumbnail||!songs){
            return res.status(301).json({err:"Insufficient data"});
        }
        const playlistData = { 
            name,
            thumbnail,
            songs,
            owner: currentUser._id,
            collaborators: [],
        };
        const playlist = await Playlist.create(playlistData);
        return res.status(200).json(playlist);
    }

);

router.get(
    "/get/playlist/:playlistId",
    passport.authenticate("jwt", {session: false}),
    async (req, res) => {
        // This concept is called req.params
        const playlistId = req.params.playlistId;
        // I need to find a playlist with the _id = playlistId
        const playlist = await Playlist.findOne({ _id: playlistId }).populate({
            path: "songs",
            populate: {
                path: "artist",
            },
        });
        if (!playlist) {
            return res.status(301).json({err: "Invalid ID"});
        }
        return res.status(200).json(playlist);
    }
);
router.get(
    "/get/me",
    passport.authenticate("jwt", {session: false}),
    async (req, res) => {
        const artistId = req.user._id;

        const playlists = await Playlist.find({owner: artistId}).populate(
            "owner"
        );
        return res.status(200).json({data: playlists});
    }
);

// get all playlist made by an artist 
router.get(
    "/get/artist/:artist",
    passport.authenticate("jwt", {session: false}),
    async (req, res) => { 
        const artistId = req.params.artistId ;
        
        const artist = await User.findOne({_id: artistId});
        if(!artist){
            return res.status(304).json({err: "Invalid Artist ID"});

        }

        const playlist = await Playlist.find({owner: artistId});
        return res.status(200).json({data: playlists});

    }
);

// add a song to playlist 

router.post(
    "/add/song",
    passport.authenticate("jwt", {session: false}),
    async (req,res) => {
        const currentUser = req.user;
        const { playlistId,songId} = req.body;

        const playlist = await Playlist.findOne({_id: playlistId});
        if(!playlist){
            return res.status(304).json({err: "Playlist doesnt exsist"});

        }
        if(!playlist.owner.equals(currentUser._id)&& !playlist.collaborators.includes(currentUser._id)){
            return res.status(400).json({err: "Not allowed"});
        }
        // step - check if cuurent user owns the plalist or in collabrators 
        const song = await Song.findOne({_id: songId});
        if(!song){
            return res.status(304).json({err: "Song doesnt exsist"});
        }
        // we can now simplyt add the song to playlist 
        playlist.songs.push(songId);
        await playlist.save();
        return res.status(200).json(playlist);
    }
);
module.exports = router;