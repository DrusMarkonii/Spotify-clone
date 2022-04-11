import React from "react";
import ReactAudioPlayer from "react-audio-player";
import "./MusicCard.css";

type MusicCardTypes = {
  track_name: string;
  author_name: string;
  img: string;
  preview_music: string;
};

export default function MusicCard({
  track_name,
  author_name,
  img,
  preview_music,
}: MusicCardTypes) {
  return (
    <div className="music_card">
      <div>
        <img className="card_img" src={img} alt={track_name} />
      </div>
      <div className="description_box">
        <div>{track_name}</div>
        <div>{author_name}</div>
      </div>
      <div>
        <ReactAudioPlayer
          className="audioPlayer"
          src={preview_music}
          controls
        />
      </div>
    </div>
  );
}
