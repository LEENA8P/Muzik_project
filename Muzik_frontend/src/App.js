
import './output.css'; 
import './index.css'; // Import Tailwind CSS here
import './App.css'; 
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import LoginComponent from "./routes/Login";
import SignupComponent from "./routes/Signup";
import HomeComponent from "./routes/Home";
import LoggedInHome from "./routes/LoggedInHome";
import UploadSong from "./routes/UploadSong";
import MyMusic from "./routes/MyMusic";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { useCookies } from "react-cookie";
import songContext from './context/songContext';
import { useState } from 'react';
import Library from './routes/Library';
import SinglePlaylistView from "./routes/SinglePlaylistView";
import SearchPage from './routes/SearchPage';

function App() {
  const [cookie, setCookie] = useCookies(["token"]);
  const [currentSong, setCurrentSong] = useState(null);
  const [soundPlayed, setSoundPlayed] = useState(null);
  const [isPaused, setIsPaused] = useState(true);
  
  return (
    
    <div className="w-full h-screen" >
      <BrowserRouter>
        {cookie.token ? (
             
              
              <songContext.Provider value={{
                currentSong,
                setCurrentSong,
                soundPlayed,
                setSoundPlayed,
                isPaused,
                setIsPaused,
                }}>
                <Routes>
                  {/* logged in routes */}
                  <Route path="/" element={<div className="bg-black">hiiii</div>} />
                  
                  <Route path="/home" element={<LoggedInHome/>} />
                  <Route path="/uploadSong" element={<UploadSong />}/>
                  <Route path="/myMusic" element={<MyMusic />} />
                  <Route path="/search" element={<SearchPage/>} />
                  <Route path="/library" element={<Library />} />
                  <Route
                                path="/playlist/:playlistId"
                                element={<SinglePlaylistView />}
                            />
                  <Route path="*" element = {<Navigate to = "/home"/>}/>
                </Routes>
            </songContext.Provider>
          
        ):(
          <Routes> 
          
          <Route path="/login" element={<LoginComponent/>} />
          <Route path="/signup" element={<SignupComponent/>} />
          <Route path="/home" element={<HomeComponent/>} />
          <Route path="*" element = {<Navigate to = "/login"/>}/>
        </Routes>
        )}
        
      </BrowserRouter>
    </div>
    

  );
}

const HelloComponent = () =>{
  return <div>This is hello from Leena</div>;
};
export default App;
