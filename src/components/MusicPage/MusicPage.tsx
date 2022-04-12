import Header from "../Header/Header";
import { useEffect, useState } from "react";
import axios from "axios";

import "./MusicPage.css";
import MusicCard from "../MusicCard/MusicCard";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/rootReducer";
import { axiosMyTracksAction } from "../../store/action-creators/user";

export default function MusicPage() {

  const dispatch = useDispatch()
  const USER = useSelector((state: RootState) => {
    return state.user
  })
  const {myTracks} = USER

  useEffect(() => {
    dispatch(axiosMyTracksAction())
  }, []);

  
  
  return (
    <div>
      <Header />
      <div className="content_box musicPage">
        <div className="musicList">

        {myTracks?.items
        ? myTracks.items.map((item: any) => (
            <MusicCard
              key={item.track.id}
              track_name={item.track.name}
              img={item.track.album.images[1].url}
              author_name={item.track.artists[0].name}
              preview_music={item.track.preview_url}
            />
          ))
        : null}
        </div>
      </div>
    </div>
  );
}
