import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { axiosNewReleasesAction } from "../../store/action-creators/user";
import { RootState } from "../../store/rootReducer";
import Header from "../Header/Header";
import MusicCard from "../MusicCard/MusicCard";

export default function HomePage() {
  const dispatch = useDispatch();
  
  const USER = useSelector((state: RootState) => {
    return state.user.newReleases;
  });
  // const {  newReleases} = USER;

  
  useEffect(() => {
    dispatch(axiosNewReleasesAction())
    // console.log(newReleases)
  },[])

  return (
    <div>
      <Header />
      <div className="content-box_homePage">
        <div className="content-box-item">
          <h3>Подборка</h3>
          <div className="featured_playlists">------------</div>
        </div>
        <div>
          <h3>Любимые треки</h3>
          <div className="favorite_tracks">------------</div>
        </div>
        <div>
          <h3>Артисты</h3>
          <div className="artists_list">------------</div>
        </div>
        <div>
          <h3>Рекомендации</h3>
          {/* <div className="recommendation"> {newReleases.playlists?.items
          ? newReleases.playlists.items.map((item: any) => (
              <MusicCard
                key={item.id}
                track_name={item.name}
                img={item.images[1].url}
                author_name={item.artists[0].name}
                preview_music={""}
              />
            ))
          : null}</div> */}
        </div>
      </div>
    </div>
  );
}
