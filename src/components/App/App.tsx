import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";

import { setDataInLocalStorage } from "../../service/authorization";
import ArtistPage from "../ArtistPage/ArtistPage";
import HomePage from "../HomePage/HomePage";
import MusicPage from "../MusicPage/MusicPage";
import PlaylistPage from "../PlaylistPage/PlaylistPage";
import EntertainmentPage from "../EntertainmentPage/EntertainmentPage";

import "./App.css";

export default function App() {
  useEffect(() => {
    if (window.location.hash) {
      setDataInLocalStorage();
    }
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/my_music" element={<MusicPage />} />
        <Route path="/entertainment" element={<EntertainmentPage />} />
        <Route path="/artist/:id" element={<ArtistPage />} />
        <Route path="/playlist/:id" element={<PlaylistPage />} />
      </Routes>
    </div>
  );
}
