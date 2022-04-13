import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

import Header from "../Header/Header";
import MusicCard from "../MusicCard/MusicCard";
import { RootState } from "../../store/reducers/rootReducer";
import {
  axiosMyDataAction,
  axiosMyTracksAction,
} from "../../store/action-creators/user";

import "./MusicPage.css";

export default function MusicPage() {
  const dispatch = useDispatch();
  const USER = useSelector((state: RootState) => {
    return state.user;
  });
  const { myTracks, myData } = USER;

  useMemo(() => {
    dispatch(axiosMyTracksAction());
    dispatch(axiosMyDataAction());
  }, [dispatch]);

  return (
    <div>
      <Header />
      {myTracks !== null && myData !== null ? (
        <div>
          <h3>Your music, {myData.display_name}</h3>
          <div className="content_box musicPage">
            <div className="musicList">
              {myTracks.items.map((item: any) => (
                <MusicCard
                  key={item.track.id}
                  track_name={item.track.name}
                  img={item.track.album.images[1].url}
                  author_name={item.track.artists[0].name}
                  preview_music={item.track.preview_url}
                />
              ))}
            </div>
          </div>
        </div>
      ) : (
        "Loading..."
      )}
    </div>
  );
}
