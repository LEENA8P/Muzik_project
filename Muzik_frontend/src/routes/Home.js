import logo_white from "../assets/images/white logo.svg";
import IconText from "../components/shared/IconText";
import { Icon } from '@iconify-icon/react';
import TextWithHover from "../components/shared/TextWithHover";

const focusCardsData = [
    {
        title: "Peaceful Piano",
        description: "Relax and indulge with beautiful piano pieces",
        imgUrl: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1546&q=80",
    },
    {
        title: "Deep Focus",
        description: "Keep calm and focus with this music",
        imgUrl: "https://images.unsplash.com/photo-1558021212-51b6ecfa0db9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1766&q=80",
    },
    {
        title: "Instrumental Study",
        description: "Focus with soft study music in the background.",
        imgUrl: "https://images.unsplash.com/photo-1612225330812-01a9c6b355ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
    },
    {
        title: "Focus Flow",
        description: "Up tempo instrumental hip hop beats",
        imgUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    },
    {
        title: "Beats to think to",
        description: "Focus with deep techno and tech house",
        imgUrl: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    },
];
const spotifyPlaylistsCardData = [
    {
        title: "This is one",
        description: "Relax and indulge with beautiful piano pieces",
        imgUrl: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1546&q=80",
    },
    {
        title: "Deep Focus",
        description: "Keep calm and focus with this music",
        imgUrl: "https://images.unsplash.com/photo-1558021212-51b6ecfa0db9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1766&q=80",
    },
    {
        title: "Instrumental Study",
        description: "Focus with soft study music in the background.",
        imgUrl: "https://images.unsplash.com/photo-1612225330812-01a9c6b355ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
    },
    {
        title: "Focus Flow",
        description: "Up tempo instrumental hip hop beats",
        imgUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    },
    {
        title: "Beats to think to",
        description: "Focus with deep techno and tech house",
        imgUrl: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    },
];
const Home = () => {
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
                            <TextWithHover displayText={"SignUp"} />

                            <div className="bg-white h-1/2 px-2 ml-2 rounded-full text-sm font-semibold flex  py-1 items-center justify-center">
                                Login In
                            </div>
                        </div>
                    </div>
                </div>
                {/* main page content  */}
                <div className="content p-8 pt-0 overflow-auto">
                    <PlaylistView
                        titleText="Focus"
                        cardsData={focusCardsData}
                    />
                    <PlaylistView
                        titleText="Spotify Playlists"
                        cardsData={spotifyPlaylistsCardData}
                    />
                    <PlaylistView
                        titleText="Sound of India"
                        cardsData={focusCardsData}
                    />
                </div>
                 
            </div>
           
            
        </div>
    );
};

const PlaylistView = ({titleText, cardsData}) => {
    return (
        <div className="text-white mt-8">
            <div className="text-2xl font-semibold mb-5">{titleText}</div>
            <div className="w-full flex justify-between space-x-4">
                {
                    // cardsData will be an array
                    cardsData.map((item) => {
                        return (
                            <Card
                                title={item.title}
                                description={item.description}
                                imgUrl={item.imgUrl}
                            />
                        );
                    })
                }
            </div>
        </div>
    );
};
const Card = ({title, description, imgUrl}) => {
    return (
        <div className="bg-black bg-opacity-15 w-1/5 p-4 rounded-lg">
            <div className="pb-4 pt-2">
                <img className="w-full rounded-md" src={imgUrl} alt="label" />
            </div>
            <div className="text-white font-semibold py-1">{title}</div>
            <div className="text-gray-500 text-sm">{description}</div>
        </div>
    );
};
export default Home;
