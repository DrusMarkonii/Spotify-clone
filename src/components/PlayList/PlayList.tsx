import React, { useEffect, useState } from 'react'
import axios from 'axios'

const MY_PLAYLISTS_ENDPOINT = 'https://api.spotify.com/v1/me/playlists'


export default function PlayList() {
    const [token, setToken] = useState('')
    const [data, setData] = useState({})

    useEffect(() => {
        if(localStorage.getItem('accessToken')){
            setToken(`${localStorage.getItem('accessToken')}`)
        }
    },[])

    const getPlaylist = () => {
        axios.get(MY_PLAYLISTS_ENDPOINT, {
            headers: {
                Authorization: `Bearer ${token}`
            },
        }).then(res => {
            setData(res.data)
        }).catch(err => {
            console.log(err)
        })
    }
  return (
    <div>
        PlayList
        <div>
            {/* <button onClick={getPlaylist}>Get Playlist</button> */}
        </div>
        </div>
  )
}
