import axios from 'axios';
import React, { useEffect, useState } from 'react'
import MusicCard from '../MusicCard/MusicCard';



export default function ArtistPage() {
    const [artist, setArtist] = useState<any>(null)
    const [album, setAlbum]= useState<any>(null)
    const [token, setToken] = useState<any>(null)


    const idOfArtist = window.location.pathname.split('/')[2] || null
    const ARTIST_ENDPOINT =`https://api.spotify.com/v1/artists/${idOfArtist}`
    const ALBUM_OF_ARTIST = `https://api.spotify.com/v1/artists/${idOfArtist}/albums`
      // console.log(idOfArtist)
      // console.log('AAAAA' ,album)

    useEffect(() => {
      setToken(() => localStorage.getItem("accessToken"))
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

    useEffect(() => {
      axios
      .get(ALBUM_OF_ARTIST, {
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setAlbum(response.data);
      });
    },[ALBUM_OF_ARTIST, token])
  return (
    <div>
        {(album === null) && (artist === null) ? 'Loading...' : <div>
        <h3>{artist.name}</h3>
        <img src={artist.images[1].url} alt={artist.name}/>
        <div>Popularity: {artist.popularity}</div>

        <div>
          {album?.items ? album.items.map((item:any) =>( <MusicCard
                key={item.id}
                track_name={item.name}
                img={item.images[1].url}
                author_name={item.album_group}
                preview_music={""}
              />)): null}
        </div>
        </div> }
        
    </div>
  )
}
