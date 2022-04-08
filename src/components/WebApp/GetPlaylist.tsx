import React, { useEffect, useState } from "react";
import axios from "axios";

const MY_PLAYLISTS_ENDPOINT = "https://api.spotify.com/v1/me/playlists";

export default function GetPlaylist() {
  const [token, setToken] = useState("");
    const [data, setData] = useState<any>({});

  
  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      setToken(`${localStorage.getItem("accessToken")}`);
    }

    
  }, []);

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
  console.log(data)
  return (
    <div>
      <button onClick={handleGetPlayList}>Get playlist</button>
      {data?.items ? data.items.map((item:any) => <p key={item.id}>{item.name}</p>): null}
    </div>
  );
}
