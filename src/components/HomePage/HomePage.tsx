import { Key, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import {
  fetchMyArtistAction,
  fetchMyTracksAction,
  fetchNewReleasesAction,
} from "../../store/action-creators/user";
import { RootState } from "../../store/reducers/rootReducer";
import AlbumCard from "../AlbumCard/AlbumCard";
import Header from "../Header/Header";
import MusicCard from "../MusicCard/MusicCard";

import "./HomePage.css";

type myTracksType = {
  track: {
    id: Key | null | undefined;
    name: string;
    album: { images: { url: string }[] };
    artists: { name: string }[];
    preview_url: string;
  };
};

type myArtistsType = {
  id: Key | null | undefined;
  name: string;
  images: { url: string }[];
  type: any;
  popularity: any;
  followers: { total: any };
};

export default function HomePage() {
  const dispatch = useDispatch();

  const USER = useSelector((state: RootState) => {
    return state.user;
  });

  const { newReleases, myArtists, myTracks } = USER;

  useMemo(() => {
    dispatch(fetchNewReleasesAction());
    dispatch(fetchMyArtistAction());
    dispatch(fetchMyTracksAction());
  }, [dispatch]);

  

  return (
    <div>
      <Header />
      {newReleases !== null && myArtists !== null && myTracks !== null ? (
        <div className="content_box homePage">
          <div>
            <h3>Last listening</h3>
            <div className="favorite_tracks_lists">
              {myTracks.items.map((item: myTracksType) => (
                <MusicCard
                  key={item.track.id}
                  track_name={item.track.name}
                  img={item.track.album.images[1].url}
                  author_name={item.track.artists[0].name}
                  preview_music={item.track.preview_url}
                />
              ))}
            </div>
          </div>
          <div className="artist-box">
            <h3>Artists</h3>
            <div className="artists_lists">
              {myArtists.items.map((item: myArtistsType) => (
                <Link
                  className="artist-link"
                  key={item.id}
                  to={`/artist/${item.id}`}
                >
                  <AlbumCard
                    album_name={item.name}
                    img={item.images[1].url}
                    album_description={`${item.type} popularity: ${item.popularity} followers: ${item.followers.total}`}
                  />
                </Link>
              ))}
            </div>
          </div>
          <div className="recommendation-box">
            <h3>Recommendation</h3>
            <div className="recommendation_lists">
              {newReleases.playlists.items.map(
                (item: {
                  id: Key | null | undefined;
                  name: string;
                  description: string;
                  images: { url: string }[];
                }) => (
                  <Link
                    className="recommend-link"
                    key={item.id}
                    to={`/playlist/${item.id}`}
                  >
                    <AlbumCard
                      album_name={item.name}
                      album_description={item.description}
                      img={item.images[0].url}
                    />
                  </Link>
                )
              )}
            </div>
          </div>
        </div>
      ) : (
        "Loading..."
      )}
    </div>
  );
}
