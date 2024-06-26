import logo_white from "../assets/images/white logo.svg";
import IconText from "../components/shared/IconText";
import { Icon } from '@iconify-icon/react';
import TextWithHover from "../components/shared/TextWithHover";
import CloudinaryUpload from "../components/shared/CloudinaryUpload";
import TextInput from "../components/shared/TextInput";
import React, { useState } from 'react';
import {makeAuthenticatedPOSTRequest} from "../utils/serverHelpers";
import { useNavigate } from 'react-router-dom';

const Home = () => {
    console.log(window);
    console.log(window.cloudinary);
    const [name, setName] = useState("");
    const [thumbnail, setThumbnail] = useState("");
    const [playlistUrl, setPlaylistUrl] = useState("");
    const [uploadedSongFileName, setUploadedSongFileName] = useState();
    const navigate = useNavigate();

    const submitSong = async () => {
        console.log('Submitting song with data:', { name, thumbnail, track: playlistUrl });
        
        try {
            const response = await makeAuthenticatedPOSTRequest("/song/create", { name, thumbnail, track: playlistUrl });
            console.log('Response:', response);
    
            if (response.err) {
                alert("Could not create song");
                return;
            }
    
            alert("Success");
            navigate("/home");
        } catch (error) {
            console.error('Error submitting song:', error);
            alert("Error submitting song");
        }
    };
    
    return (
        <div className="w-full h-full flex">
            <div className="h-full w-1/5 bg-black flex flex-col justify-between">
                <div>
                    <div className="logodiv p-4">
                        {/* this div is for logo */}
                        <img src={logo_white} alt="Logo" width={150} />
                    </div>
                    <div>
                        <IconText iconName={"material-symbols-light:home"} displayText={"Home"} active />
                    </div>
                    <div>
                        <IconText iconName={"material-symbols:search"} displayText={"Search"} />
                    </div>
                    <div>
                        <IconText iconName={"fluent:library-32-filled"} displayText={"Library"} />
                    </div>
                    <div>
                        <IconText iconName={"mdi:music-box"} displayText={"My Music"} />
                    </div>
                    <div className="pt-5">
                        <div>
                            <IconText iconName={"gridicons:add"} displayText={"Create Playlist"} />
                        </div>
                        <div>
                            <IconText iconName={"icon-park-solid:like"} displayText={"Liked Songs"} />
                        </div>
                    </div>
                </div>
                <div>
                    <div className="px-4 flex my-4">
                        <div className="border rounded-full border-gray-100 text-white flex items-center px-2 py-1 hover:border-white cursor-pointer">
                            <Icon icon="ph:globe" className="text-white mr-2" />
                            <div className="text-sm font-semibold">
                                English
                            </div>
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
                <div className="content p-8 pt-0 overflow-auto">
                <div className="text-2xl font-semibold mb-5 text-white mt-8">
                        Upload Your Music
                    </div>
                    <div className="w-2/3 flex space-x-3">
                        <div className="w-1/2">
                            <TextInput
                                label="Name"
                                labelClassName={"text-white"}
                                placeholder="Name"
                                value={name}
                                setValue={setName}
                            />
                        </div>
                        <div className="w-1/2">
                            <TextInput
                                label="Thumbnail"
                                labelClassName={"text-white"}
                                placeholder="Thumbnail"
                                value={thumbnail}
                                setValue={setThumbnail}
                            />
                        </div>
                    </div>
                    <div className="py-5">
                        {uploadedSongFileName ? (
                            <div className="bg-white h-10  rounded-full p-3 w-1/3">
                                {uploadedSongFileName.substring(0, 35)}...
                            </div>
                        ) : (
                            <CloudinaryUpload
                                setUrl={setPlaylistUrl}
                                setName={setUploadedSongFileName}
                            />
                        )}
                    </div>
                     <button
                        className="bg-white text-black  rounded-full py-1 px-2  font-semibold"
                        onClick={submitSong}
                    >
                        Submit Song
                    </button>  
                    
                    
                </div>
                 
            </div>
           
            
        </div>
    );
};


export default Home;
