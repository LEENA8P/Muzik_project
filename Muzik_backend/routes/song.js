const express = require("express");
const router = express.Router();
const passport = require("passport");
const Song = require("../models/Song");
const User = require("../models/User");

router.post("/create", passport.authenticate("jwt",{session: false}),
     async(req,res)=> {
    //req.user gets the user beacause of passport 
    const {name, thumbnail, track}=req.body;
    if(!name||!thumbnail||!track){
        return res.status(301).json({err: "Insufficient details to create song "});
    }
    const artist = req.user._id;
    const songDetails = {name, thumbnail, track, artist};
    const createdSong = await Song.create(songDetails);
    return res.status(200).json(createdSong);

});
// get route to get all songs I have published 
router.get(
    "/get/mysongs", 
    passport.authenticate("jwt", {session:false}),
    async (req,res)=>{
        
        //we need to get all songs artist id == currentUser.id
        const songs = await Song.find({artist: req.user._id}).populate("artist");
        return res.status(200).json({data: songs});
    }
);

// get route all song any artist has published
// i will send the artist id to see all the songs that artist has published 
router.get("/get/artist/:artistId", passport.authenticate("jwt",{session: false}),
 async( req, res )=>{
     const {artistId} = req.params;
     // we can check is artist doesnt exsist 
     const artist = await User.findOne({_id: artistId});
     if(!artist){
        return res.status(301).json({err:"Artist doesnt exsist"});
     }
     const songs = await Song.find({artist: artistId});
     return res.status(200).json({data: songs});
    }
 );

// get route to get single song by name 

router.get(
    "/get/songname/:songName",
     passport.authenticate("jwt",{session : false }),
     async (req,res)=> { 
        const {songName} = req.params;
        // we can check is artist doesnt exsist 
        // name exact exact hona chaiye .
        const songs = await Song.find({name: songName}).populate("artist");
        return res.status(200).json({data: songs});
     }

);
module.exports = router;