import { useEffect, useMemo, useState } from "react";

import { getCurrentPlaylist, getPlaylistTracks } from "../../service/endpoints";
import Header from "../Header/Header";
import TrackCard from "../TrackCard/TrackCard";

import "./PlaylistPage.css";

export default function PlaylistPage() {
  const [tracks, setTracks] = useState<any>(null);
  const [idOfPlaylist, setIdOfPlaylist] = useState<null | string>(null);
  const [currentPlaylist, setCurrentPlaylist] = useState<any>(null);

  useEffect(() => {
    setIdOfPlaylist(window.location.pathname.split("/")[2]);
  }, []);

  const playlistData = async (id: string) => {
    const playlist = await getPlaylistTracks(id);
    setTracks(playlist);
  };

  const currentPlaylistData = async (id: string) => {
    const currentPlaylist = await getCurrentPlaylist(id);
    setCurrentPlaylist(currentPlaylist);
  };

  useMemo(() => {
    if (idOfPlaylist) {
      playlistData(idOfPlaylist);
      currentPlaylistData(idOfPlaylist);
    }
  }, [idOfPlaylist]);

  return (
    <div>
      <Header />
      {tracks?.items && currentPlaylist ? (
        <div className="content-box_MusicPage">
          <div>
            <h3>{currentPlaylist.name}</h3>
            <img
              src={currentPlaylist.images[0].url}
              alt={currentPlaylist.description}
              className="album_img"
            />
          </div>
          <div className="tracks-box">
            <div className="tracks-list">
              {tracks.items?.map((item: any) => (
                <TrackCard
                  key={item.track.id}
                  track_name={item.track.name}
                  author_name={item.track.artists[0].name}
                  preview_music={""}
                />
              ))}
            </div>
          </div>
        </div>
      ) : (
        "Loading.."
      )}

      <div></div>
    </div>
  );
}
