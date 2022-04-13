import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import "./App.css";
import Counter from "../Counter";

import { getAuthorizeUrl, getDataFromHash, setDataInLocalStorage } from "../../service/authorization";
import axios from "axios";
import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/rootReducer";
import WebApp from "../WebApp/WebApp";
import ArtistPage from "../ArtistPage/ArtistPage";
import HomePage from "../HomePage/HomePage";
import MusicPage from "../MusicPage/MusicPage";
import PlaylistPage from "../PlaylistPage/PlaylistPage";
import EntertainmentPage from "../EntertainmentPage/EntertainmentPage";


export default function App() {
  useEffect(() => {
    if (window.location.hash) {
      setDataInLocalStorage()
    }
  }, []);
  
  return (
    <div className="App">
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/my_music" element={<MusicPage />} />
        <Route path="/entertainment" element={<EntertainmentPage />} />
        <Route  path="/webapp" element={<WebApp />} />
        <Route path="/artist/:id" element={<ArtistPage />} />
        <Route path="/playlist/:id" element={<PlaylistPage />} />
      </Routes>
    </div>
  );
}
