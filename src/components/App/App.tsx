import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import "./App.css";
import Counter from "../Counter";

import { getAuthorizeUrl, getDataFromHash } from "../../service/authorization";
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
// import { render } from "@testing-library/react";
// import Header from "../Header/Header";
// import HomePage from "../HomePage/HomePage";
// import PlayList from "../PlayList/PlayList";

export default function App() {
  useEffect(() => {
    if (window.location.hash) {
      const { access_token, token_type, expires_in } = getDataFromHash(
        window.location.hash
      );
      localStorage.clear();
      localStorage.setItem("accessToken", access_token);
      localStorage.setItem("tokenType", token_type);
      localStorage.setItem("expiresIn", `${expires_in}`);
    }
  }, []);
  const getDataFromHash = (hash: string) => {
    const arr = hash.slice(1).split("&");
    const access_token = arr[0].slice(13);
    const token_type = arr[1].slice(11);
    const expires_in = +arr[2].slice(11);
    return {
      access_token,
      token_type,
      expires_in,
    };
  };

  const handleLogin = () => {
    window.location.href = getAuthorizeUrl();
  };
  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/music" element={<MusicPage />} />
        <Route path="/playlists" element={<PlaylistPage />} />
        <Route path="/entertainment" element={<EntertainmentPage />} />
        <Route path="/webapp" element={<WebApp />} />
        <Route path="/artist/:id" element={<ArtistPage />} />
      </Routes>
    </div>
  );
}
