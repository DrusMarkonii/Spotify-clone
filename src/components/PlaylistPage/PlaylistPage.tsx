import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { axiosMyTracksAction, axiosPlaylistAction } from "../../store/action-creators/user";
import { RootState } from "../../store/rootReducer";
import Header from "../Header/Header";

import './PlaylistPage.css'

export default function PlaylistPage() {

  const dispatch = useDispatch()
  const USER = useSelector((state: RootState) => {
    return state.user
  })

   const {myPlaylist} = USER

  useEffect(() => {
    dispatch(axiosPlaylistAction())
    
    console.log(USER)
  },[])

  return (
    <div>
      <Header />
      <div className="content-box_MusicPage">
      PlaylistPagePlaylistPagePlaylistPagePlaylistPagePlaylistPagePlaylistPagePlaylistPage
      {myPlaylist?.items
        ? myPlaylist.items.map((item: any) => <p key={item.id}>{item.name}</p>)
        : null}

      </div>
      <div>
      </div>
    </div>
  );
}
