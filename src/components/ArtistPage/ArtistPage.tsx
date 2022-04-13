import { useEffect, useMemo, useState } from "react";

import {
  getArtistAlbum,
  getArtistData,
  getArtistTopTracks,
} from "../../service/endpoints";
import {
  albumType,
  ArtistType,
  topTracksType,
} from "../../store/types/apiTypes";
import AlbumCard from "../AlbumCard/AlbumCard";
import Header from "../Header/Header";
import TrackCard from "../TrackCard/TrackCard";

import "./ArtistPage.css";

export default function ArtistPage() {
  const [artist, setArtist] = useState<ArtistType | null>(null);
  const [idOfArtist, setIdOfArtist] = useState<string | null>(null);
  const [album, setAlbum] = useState<albumType | null>(null);
  const [topTracks, setTopTracks] = useState<topTracksType | null>(null);

  const artistData = async (id: string) => {
    const artist = await getArtistData(id);
    setArtist(artist);
  };

  const artistAlbum = async (id: string) => {
    const artistAlbum = await getArtistAlbum(id);
    setAlbum(artistAlbum);
  };

  const artistTopTracks = async (id: string) => {
    const artistTopTracks = await getArtistTopTracks(id);
    setTopTracks(artistTopTracks);
  };

  useEffect(() => {
    setIdOfArtist(window.location.pathname.split("/")[2]);
  }, []);

  useMemo(() => {
    if (idOfArtist) {
      artistData(idOfArtist);
      artistAlbum(idOfArtist);
      artistTopTracks(idOfArtist);
    }
  }, [idOfArtist]);

  return (
    <div>
      <Header />
      {album === null && artist === null && topTracks === null ? (
        "Loading..."
      ) : (
        <div>
          <h3>{artist?.name}</h3>
          <img
            src={artist?.images[1].url}
            alt={artist?.name}
            className="artist_img"
          />
          <div>Popularity: {artist?.popularity}</div>

          <div className="artistPage_tracks_box">
            {topTracks?.tracks.map((item) => (
              <TrackCard
                key={item.id}
                track_name={item.name}
                author_name={item.artists[0].name}
                preview_music={item.preview_url}
              />
            ))}
          </div>

          <div className="artistPage_album_box">
            <h3>Albums</h3>
            <div className="artistPage_album_list">
              {album?.items.map((item) => (
                <AlbumCard
                  key={item.id}
                  album_name={item.name}
                  img={item.images[1].url}
                  album_description={item.album_group}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
