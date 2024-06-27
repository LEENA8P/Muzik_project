import logo_white from "../assets/images/white logo.svg";
import IconText from "../components/shared/IconText";
import { Icon } from '@iconify-icon/react';
import TextWithHover from "../components/shared/TextWithHover";
import { Children, useLayoutEffect, useState ,useRef,useContext} from "react";
import { Howl, Howler } from "howler";
import { makeAuthenticatedGETRequest } from "../utils/serverHelpers";
import songContext from "../context/songContext";
import CreatePlaylistModal from "../modals/CreatePlaylistModal";
import AddToPlaylistModal from "../modals/AddToPlaylistModal";
import {makeAuthenticatedPOSTRequest} from "../utils/serverHelpers";
const LoggedInContainer = ({children, curActiveScreen}) => {
    const { 
        currentSong ,
        setCurrentSong,
        soundPlayed,
        setSoundPlayed,
        isPaused,
        setIsPaused,

    } = useContext(songContext);
    const [createPlaylistModalOpen, setCreatePlaylistModalOpen] =
        useState(false);
    const [addToPlaylistModalOpen, setAddToPlaylistModalOpen] = useState(false);

    //const [previousTrack, setPreviousTrack] = useState(null);
    const firstUpdate = useRef(true);

    useLayoutEffect(() => {
        if (firstUpdate.current) {
            firstUpdate.current = false;
            return;
        }

        if (!currentSong ) {
            return;
        }
        changeSong(currentSong.track);
    }, [currentSong && currentSong.track]);

    const addSongToPlaylist = async (playlistId) => {
        const songId = currentSong._id;

        const payload = {playlistId, songId};
        const response = await makeAuthenticatedPOSTRequest(
            "/playlist/add/song",
            payload
        );
        if(response._id){
            setAddToPlaylistModalOpen(false)
        }
    };

    const playSound = () => {
        if (!soundPlayed) {
            return;
        }
        soundPlayed.play();
        setIsPaused(false);
    };

    const changeSong = (songSrc) => {
        if (soundPlayed) {
            soundPlayed.stop();
            soundPlayed.unload();
        }
        let sound = new Howl({
            src: [songSrc],
            html5: true,
        });
        setSoundPlayed(sound);
        sound.play();
        //setPreviousTrack(songSrc);
        setIsPaused(false);
    };

    const pauseSound = () => {
        if (soundPlayed) {
            soundPlayed.pause();
            setIsPaused(true);
        }
    };

    const togglePlayPause = () => {
        if (isPaused) {
            playSound();
        } else {
            pauseSound();
        }
    };

    return (
        <div className="w-full h-full bg-app-black">
            {createPlaylistModalOpen && (
                <CreatePlaylistModal
                    closeModal={() => {
                        setCreatePlaylistModalOpen(false);
                    }}
                />
            )}
            {addToPlaylistModalOpen && (
                <AddToPlaylistModal
                    closeModal={() => {
                        setAddToPlaylistModalOpen(false);
                    }}
                    addSongToPlaylist={addSongToPlaylist}
                />
            )}
            <div className={`${currentSong ? "h-9/10" : "h-full"} w-full flex`}>
              <div className="h-full w-1/5 bg-black flex flex-col justify-between">
              <div className="logodiv p-4">
                        {/* this div is for logo */}
                        <img src={logo_white} alt="Logo" width={150} />
                    </div>
                    <div>
                        <IconText
                         iconName={"material-symbols-light:home"} 
                         displayText={"Home"} 
                         targetLink={"/home"}
                         active={curActiveScreen === "home"}
                         />
                    </div>
                    <div>
                        <IconText iconName={"material-symbols:search"} displayText={"Search"}  active={curActiveScreen === "search"}/>
                    </div>
                    <div>
                        <IconText iconName={"fluent:library-32-filled"} displayText={"Library"} active={curActiveScreen === "library"}  targetLink={"/library"}/>
                    </div>
                    <div>
                        <IconText iconName={"mdi:music-box"} displayText={"My Music"} targetLink={"/myMusic"} active={curActiveScreen === "myMusic"}/>
                    </div>
                    <div className="pt-5">
                        <div>
                            <IconText iconName={"gridicons:add"} displayText={"Create Playlist"} onClick={() => {
                                    setCreatePlaylistModalOpen(true);
                                }} />
                        </div>
                        <div>
                            <IconText iconName={"icon-park-solid:like"} displayText={"Liked Songs"} />
                        </div>
                    </div>
                
                
                    <div className="px-4 flex my-4">
                        <div className="border rounded-full border-gray-100 text-white flex items-center px-2 py-1 hover:border-white cursor-pointer">
                            <Icon icon="ph:globe" className="text-white mr-2" />
                            <div className="text-sm font-semibold">
                                English
                            </div>
                        </div>
                    </div>
                    
            </div>
            
            

            <div className="h-full w-4/5 bg-app-black  overflow-auto  ">
                {/* Add content for the rest of the page here */}
                <div className="navbar w-full h-1/10 bg-black bg-opacity-10 flex justify-end  items-center px-4  ">
                <div className="flex justify-end w-full items-center ">
                        <TextWithHover displayText={"Support"} />
                        <TextWithHover displayText={"Download"} />
                        <div className="flex items-center border-l px-2 ml-2 border-white">
                            <TextWithHover displayText={"Upload Song"} />

                            <div className="bg-white w-10 h-10 px-2 ml-2 rounded-full text-sm font-semibold flex  py-1 items-center justify-center">
                                LP
                            </div>
                        </div>
                    </div>
                </div>
                {/* main page content  */}
                <div className="content p-8 pt-0 ">
                    {children}
                </div>
                 
            </div>
           </div>
           {currentSong && (
           <div className="h-1/10 w-full bg-black bg-opacity-10 px-3 text-white flex items-center">
                <div className="w-1/4 flex items-center">
                    <img src={currentSong.thumbnail} alt="thumb" 
                    className="h-14 w-14  rounded"
                    />
                    <div className="pl-4">
                        <div className="text-sm hover:underline cursor-pointer" >
                            {currentSong.name}
                         </div>
                        <div className="text-xs hover:underline cursor-pointer" text-gray-500 >
                        {currentuser.charAt(0).toUpperCase()}
                        </div>
                    </div>
                </div>
                <div className="w-1/2 h-full flex  flex-col items-center justify-center ">
                    
                    <div className="flex  w-1/3 justify-between items-center">
                            {/* controls for the playing song go here */}
                            <Icon
                                icon="ph:shuffle-fill"
                                fontSize={25}
                                className="cursor-pointer text-gray-500 hover:text-white"
                            />
                            <Icon
                                icon="mdi:skip-previous-outline"
                                fontSize={25}
                                className="cursor-pointer text-gray-500 hover:text-white"
                            />
                            <Icon
                                icon={
                                    isPaused ?
                                         "ic:baseline-play-circle"
                                        : "ic:baseline-pause-circle"
                                }
                                //fontSize={300}
                                className="cursor-pointer text-gray-500 hover:text-white text-3xl"
                                //onClick={togglePlayPause}
                                onClick={togglePlayPause}
                            />
                            <Icon
                                icon="mdi:skip-next-outline"
                                fontSize={25}
                                className="cursor-pointer text-gray-500 hover:text-white"
                            />
                            <Icon
                                icon="ic:twotone-repeat"
                                fontSize={25}
                                className="cursor-pointer text-gray-500 hover:text-white"
                            />
                        </div>
                        {/* <div>Progress Bar Here</div> */}
                    
                    <div className=""></div>
                </div>
                <div className="w-1/4 flex px-2 justify-end">
                        <Icon
                            icon="ic:round-playlist-add"
                            fontSize={30}
                            className="cursor-pointer text-gray-500 px-2 hover:text-white"
                            onClick={() => {
                                setAddToPlaylistModalOpen(true);
                            }}
                        />
                        <Icon
                            icon="ph:heart-bold"
                            fontSize={25}
                            className="cursor-pointer text-gray-500  px-2 hover:text-white"
                        />
                </div>
           </div>
           )}
        </div>
        
    );
};



export default LoggedInContainer;
