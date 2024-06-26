// const Home = () => {
//     const [soundPlayed, setSoundPlayed] = useState(null);
//     const [isPaused, setIsPaused] = useState(true);
//     const playSound = (songSrc) => {
//         if(soundPlayed){
//             soundPlayed.stop();

//         }
//         let sound = new Howl({
//             src: [songSrc],
//             html5: true,
//         });
//         setSoundPlayed(sound);
//         sound.play();
//     };

//     const pauseSound = ()=>{
//         soundPlayed.pause();
//     };
//     const togglePlayPause=()=>{
//          if(isPaused){
//             playSound("https://res.cloudinary.com/dsmcyksio/video/upload/v1719212503/jfcmuwrboooqwc2atbhl.mp3");
//             setIsPaused(false);
//          }
//          else{
//             pauseSound();
//             setIsPaused(true);
//          }
//     };
//     // useEffect(()=>{
//     //     const getData = async ()=> {
//     //         const response = await makeAuthenticatedGETRequest(
//     //             "/song/get/mysongs"
//     //         );
//     //     };
//     //     getData();
//     // }, []);

//     return (
//         <div className="w-full h-full bg-app-black">
//             <div className="h-9/10 w-full flex">
//               <div className="h-full w-1/5 bg-black flex flex-col justify-between">
//               <div className="logodiv p-4">
//                         {/* this div is for logo */}
//                         <img src={logo_white} alt="Logo" width={150} />
//                     </div>
//                     <div>
//                         <IconText iconName={"material-symbols-light:home"} displayText={"Home"} active />
//                     </div>
//                     <div>
//                         <IconText iconName={"material-symbols:search"} displayText={"Search"} />
//                     </div>
//                     <div>
//                         <IconText iconName={"fluent:library-32-filled"} displayText={"Library"} />
//                     </div>
//                     <div>
//                         <IconText iconName={"mdi:music-box"} displayText={"My Music"} />
//                     </div>
//                     <div className="pt-5">
//                         <div>
//                             <IconText iconName={"gridicons:add"} displayText={"Create Playlist"} />
//                         </div>
//                         <div>
//                             <IconText iconName={"icon-park-solid:like"} displayText={"Liked Songs"} />
//                         </div>
//                     </div>
                
                
//                     <div className="px-4 flex my-4">
//                         <div className="border rounded-full border-gray-100 text-white flex items-center px-2 py-1 hover:border-white cursor-pointer">
//                             <Icon icon="ph:globe" className="text-white mr-2" />
//                             <div className="text-sm font-semibold">
//                                 English
//                             </div>
//                         </div>
//                     </div>
                    
//             </div>
            
            

//             <div className="h-full w-4/5 bg-app-black  overflow-auto  ">
//                 {/* Add content for the rest of the page here */}
//                 <div className="navbar w-full h-1/10 bg-black bg-opacity-10 flex justify-end  items-center px-4  ">
//                 <div className="flex justify-end w-full items-center ">
//                         <TextWithHover displayText={"Support"} />
//                         <TextWithHover displayText={"Download"} />
//                         <div className="flex items-center border-l px-2 ml-2 border-white">
//                             <TextWithHover displayText={"Upload Song"} />

//                             <div className="bg-white w-10 h-10 px-2 ml-2 rounded-full text-sm font-semibold flex  py-1 items-center justify-center">
//                                 LP
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 {/* main page content  */}
//                 <div className="content p-8 pt-0 ">
//                     <PlaylistView
//                         titleText="Focus"
//                         cardsData={focusCardsData}
//                     />
//                     <PlaylistView
//                         titleText="Spotify Playlists"
//                         cardsData={spotifyPlaylistsCardData}
//                     />
//                     <PlaylistView
//                         titleText="Sound of India"
//                         cardsData={focusCardsData}
//                     />
//                 </div>
                 
//             </div>
//            </div>
//            <div className="h-1/10 w-full bg-black bg-opacity-10 px-3 text-white flex items-center">
//                 <div className="w-1/4 flex items-center">
//                     <img src="" alt="thumb" 
//                     className="h-14 w-14  rounded"
//                     />
//                     <div className="pl-4">
//                         <div className="text-sm hover:underline cursor-pointer" >song name </div>
//                         <div className="text-xm hover:underline cursor-pointer" text-gray-500 >song name </div>
//                     </div>
//                 </div>
//                 <div className="w-1/2 h-full flex  flex-col items-center justify-center ">
                    
//                     <div className="flex  w-1/3 justify-between items-center">
//                             {/* controls for the playing song go here */}
//                             <Icon
//                                 icon="ph:shuffle-fill"
//                                 fontSize={25}
//                                 className="cursor-pointer text-gray-500 hover:text-white"
//                             />
//                             <Icon
//                                 icon="mdi:skip-previous-outline"
//                                 fontSize={25}
//                                 className="cursor-pointer text-gray-500 hover:text-white"
//                             />
//                             <Icon
//                                 icon={
//                                     isPaused ?
//                                          "ic:baseline-play-circle"
//                                         : "ic:baseline-pause-circle"
//                                 }
//                                 //fontSize={300}
//                                 className="cursor-pointer text-gray-500 hover:text-white text-3xl"
//                                 //onClick={togglePlayPause}
//                                 onClick={togglePlayPause}
//                             />
//                             <Icon
//                                 icon="mdi:skip-next-outline"
//                                 fontSize={25}
//                                 className="cursor-pointer text-gray-500 hover:text-white"
//                             />
//                             <Icon
//                                 icon="ic:twotone-repeat"
//                                 fontSize={25}
//                                 className="cursor-pointer text-gray-500 hover:text-white"
//                             />
//                         </div>
//                         {/* <div>Progress Bar Here</div> */}
                    
//                     <div className=""></div>
//                 </div>
//                 <div className="w-1/4 flex justify-end">hello</div>
//            </div>
//         </div>
        
//     );
// };