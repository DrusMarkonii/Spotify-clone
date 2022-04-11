import axios from 'axios';
import React, { useEffect, useState } from 'react'



export default function ArtistPage() {
    const [artist, setArtist] = useState<any>(null)
    const token = localStorage.getItem("accessToken")
    const idOfArtist = window.location.pathname.split('/')[2] || null
    const ARTIST_ENDPOINT =`https://api.spotify.com/v1/artists/${idOfArtist}`

      console.log(token)
      console.log(idOfArtist)

    useEffect(() => {
        axios
      .get(ARTIST_ENDPOINT, {
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setArtist(response.data);
      });
    },[token, ARTIST_ENDPOINT])
    console.log(artist)
  return (
    <div>
        {artist === null ? 'Loading...' : <div>
        <h3>{artist.name}</h3>
        <img src={artist.images[1].url} alt={artist.name}/>
        <div>Popularity: {artist.popularity}</div>
        </div> }
        
    </div>
  )
}
