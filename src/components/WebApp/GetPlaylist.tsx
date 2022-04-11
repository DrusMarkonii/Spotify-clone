import React, { useEffect, useState } from "react";
import axios from "axios";
import MusicCard from "../MusicCard/MusicCard";
import { Link } from "react-router-dom";

const MY_PLAYLISTS_ENDPOINT = "https://api.spotify.com/v1/me/playlists";
const MY_TRACKS_ENDPOINT = "https://api.spotify.com/v1/me/tracks";
const MY_PROFILE_ENDPOINT = "https://api.spotify.com/v1/me";
const NEW_RELEASES = "https://api.spotify.com/v1/browse/featured-playlists";
const ARTISTS_ENDPOINT = "https://api.spotify.com/v1/me/top/artists";
const RECOMMENDATIONS_ENDPOINT = "https://api.spotify.com/v1/recommendations";
const album_endP = "https://api.spotify.com/v1/albums";

export default function GetPlaylist() {
  const [token, setToken] = useState("");
  const [playList, setPlayList] = useState<any>("");
  const [tracks, setTracks] = useState<any>("");
  const [profile, setProfile] = useState<any>("");
  const [releases, newReleases] = useState<any>("");
  const [artist, setArtist] = useState<any>("");
  const [alb, setAlb] = useState<any>("");

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      setToken(`${localStorage.getItem("accessToken")}`);
    }
  }, []);

  useEffect(() => {
    if (artist) {
      const artistIdList: any = [];
      // artistIdList.map(() => console.log('1'))
      artist.items.map(({ id }: any) => artistIdList.push(id));
      console.log(artistIdList);
    }
  }, [artist]);

  useEffect(() => {
    console.log("data", playList);
    console.log("tracks", tracks);
    console.log("profile", profile);
    console.log("releases", releases);
    console.log("artist", artist);
    console.log("alb", alb);
    console.log("-------   --------- -------- ");
  }, [playList, tracks, profile, releases, artist, alb]);

  const handleGetPlayList = () => {
    axios
      .get(MY_PLAYLISTS_ENDPOINT, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((response) => {
        setPlayList(response.data);
      })
      .catch((error) => console.log(error));
  };

  const handleTracks = () => {
    axios
      .get(MY_TRACKS_ENDPOINT, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((response) => {
        setTracks(response.data);
      })
      .catch((error) => console.log(error));
  };

  const handleProfile = () => {
    axios
      .get(MY_PROFILE_ENDPOINT, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((response) => {
        setProfile(response.data);
      })
      .catch((error) => console.log(error));
  };

  const handleNewReleases = () => {
    axios
      .get(NEW_RELEASES, {
        params: {
          limit: 10,
        },
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        newReleases(response.data);
      });
  };

  const handleGetArtists = () => {
    axios
      .get(ARTISTS_ENDPOINT, {
        params: {
          limit: 9,
        },
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setArtist(response.data);
      });
  };

  const handleAlb = () => {
    axios
      .get(RECOMMENDATIONS_ENDPOINT, {
        params: {
          seed_artists: "4NHQUGzhtTLFvgF5SZesLK",
          seed_genres: "classical%2Ccountry",
          seed_tracks: "0c6xIDDpzE81m2q797ordA",
        },
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setAlb(response.data);
      });
  };

  return (
    <div>
      <button onClick={handleGetPlayList}>Get playlist</button>
      {playList?.items
        ? playList.items.map((item: any) => <p key={item.id}>{item.name}</p>)
        : null}

      <div>
        <button onClick={handleTracks}>Get my tracks</button>
        {tracks?.items
          ? tracks.items.map((item: any) => (
              <p key={item.added_at}>{item.track.name}</p>
            ))
          : null}
      </div>
      <button onClick={handleTracks}>Get my tracks</button>
      {tracks?.items
        ? tracks.items.map((item: any) => (
            <MusicCard
              key={item.track.id}
              track_name={item.track.name}
              img={item.track.album.images[1].url}
              author_name={item.track.artists[0].name}
              preview_music={item.track.preview_url}
            />
          ))
        : null}
      <div></div>
      <div>
        <button onClick={handleProfile}>Get my profile</button>
        {profile ? <p>Country: {profile.country}</p> : null}
      </div>

      <div>
        <button onClick={handleNewReleases}>New Releases</button>
        {releases?.items
          ? releases.items.map((item: any) => (
              <MusicCard
                key={item.id}
                track_name={item.name}
                img={item.images[1].url}
                author_name={item.artists[0].name}
                preview_music={""}
              />
            ))
          : null}
      </div>

      <div>
        <button onClick={handleGetArtists}>Get Artists</button>
        {artist?.items
          ? artist.items.map((item: any) => (
            <Link key={item.id} to={`/artist/${item.id}`}>
              <MusicCard
                key={item.id}
                track_name={item.name}
                img={item.images[1].url}
                author_name={""}
                preview_music={""}
              />
          </Link>
          )): null}
      </div>

      <div>
        <button onClick={handleAlb}>Get Alb</button>
        {alb?.tracks
          ? alb.tracks.map((item: any) => (
              <Link key={item.id} to={`/${item.id}`}>
                <MusicCard
                  key={item.id}
                  track_name={item.name}
                  img={item.album.images[1].url}
                  author_name={item.artists[0].name}
                  preview_music={item.preview_url}
                />
                )
              </Link>
            ))
          : ""}
      </div>
    </div>
  );
}

// export const getRecommendations = async () => {
//     try {
//       const response = await api({
//         method: "GET",
//         url: "recommendations",
//         headers: {
//           Authorization: getAuthorization(),
//         },
//       });

//       const newReleases = response.data;
//       return newReleases;
//     } catch (error: any) {
//       throw new Error(error.response.message);
//     }
//   };

// export const getUserTracks = async () => {
//     try {
//       const response = await api({
//         method: "GET",
//         url: "me/tracks",
//         headers: {
//           Authorization: getAuthorization(),
//         },
//       });
//       return response.data;
//     } catch (error: any) {
//       if (error.response.status === 400 || error.response.status === 401)
//         window.location.href = getAuthorizeUrl();

//       throw new Error(error.response.message);
//     }
//   };
