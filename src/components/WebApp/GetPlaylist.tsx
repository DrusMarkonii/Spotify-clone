import React, { useEffect, useState } from "react";
import axios from "axios";
import { getUserTracks } from "../../service/api";
import MusicCard from "../MusicCard/MusicCard";

const MY_PLAYLISTS_ENDPOINT = "https://api.spotify.com/v1/me/playlists";
const MY_TRACKS_ENDPOINT = 'https://api.spotify.com/v1/me/tracks'
const MY_PROFILE_ENDPOINT = 'https://api.spotify.com/v1/me'
const MY_RECOMENDATION = 'https://api.spotify.com/v1/recommendations'


export default function GetPlaylist() {
  const [token, setToken] = useState("");
    const [data, setData] = useState<any>({});
    const [tracks, setTracks] = useState<any>({})
    const [profile, setProfile] = useState<any>({})

  
  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      setToken(`${localStorage.getItem("accessToken")}`);
    }

    

    
  }, []);

  useEffect(() => {
    console.log('data', data)
    console.log('tracks', tracks)
    console.log('profile', profile)
    console.log('-------   --------- -------- ')
  },[data, tracks, profile])

  const handleGetPlayList = () => {
    axios
      .get(MY_PLAYLISTS_ENDPOINT, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((response) => {
        setData(response.data);
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
  }

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
  }
 
  return (
    <div>
      <button onClick={handleGetPlayList}>Get playlist</button>
      {data?.items ? data.items.map((item:any) => <p key={item.id}>{item.name}</p>): null}
      
      <div>
      {/* <button onClick={handleTracks}>Get my tracks</button> */}
      {/* {tracks?.items ? tracks.items.map((item:any) => <p key={item.added_at}>{item.track.name}</p>): null} */}
      </div>
      <button onClick={handleTracks}>Get my tracks</button>
      {tracks?.items ? tracks.items.map((item:any) => <MusicCard key={item.track.id} track_name={item.track.name} img={''} author_name={item.track.artists[0].name} preview_music={item.track.preview_url}/>): null}
      <div>

      </div>
      <div>
      <button onClick={handleProfile}>Get my profile</button>
      {profile ?
       (<p>Country: {profile.country}</p>) : null}
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