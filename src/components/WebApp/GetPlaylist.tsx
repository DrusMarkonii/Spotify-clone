import React, { useEffect, useState } from "react";
import axios from "axios";
import MusicCard from "../MusicCard/MusicCard";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/rootReducer";
import { axiosMyArtistAction, axiosMyDataAction, axiosMyTracksAction, axiosNewReleasesAction, axiosPlaylistAction, getTokenAction } from "../../store/action-creators/user";
import { getNewReleases, getPlayList } from "../../service/endpoints";



const MY_PROFILE_ENDPOINT = "https://api.spotify.com/v1/me";
const NEW_RELEASES = "https://api.spotify.com/v1/browse/featured-playlists";
const ARTISTS_ENDPOINT = "https://api.spotify.com/v1/me/top/artists";
const RECOMMENDATIONS_ENDPOINT = "https://api.spotify.com/v1/recommendations";
const album_endP = "https://api.spotify.com/v1/albums";

export default function GetPlaylist() {
  
  const USER = useSelector((state: RootState) => {
    return state.user
  })

  
  const {token, myArtists} = USER

  const dispatch = useDispatch()
  
  // const [playList, setPlayList] = useState<any>("");
  // const [tracks, setTracks] = useState<any>("");
  // const [profile, setProfile] = useState<any>("");
  // const [releases, newReleases] = useState<any>("");
  const [artist, setArtist] = useState<any>("");
  const [alb, setAlb] = useState<any>("");

  
  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      dispatch(getTokenAction(localStorage.getItem("accessToken")))
    }
  }, []);

  useEffect(() => {
    if (artist) {
      const artistIdList: any = [];
      artist.items.map(({ id }: any) => artistIdList.push(id));
      
    }
  }, [artist]);

 
 

  const handleGetPlayList = () => {
    dispatch(axiosPlaylistAction())

  };

  const handleTracks = () => {
    dispatch(axiosMyTracksAction())
  };

  const handleProfile = () => {
    dispatch(axiosMyDataAction())
  };

  const handleNewReleases = () => {
    dispatch(axiosNewReleasesAction())  
  };

  const handleGetArtists = () => {
    dispatch(axiosMyArtistAction())  
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

      <div>
        <button onClick={handleGetArtists}>Get Artists</button>
        {myArtists?.items
          ? myArtists.items.map((item: any) => (
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

