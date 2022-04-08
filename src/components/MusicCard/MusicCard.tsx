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
      <div>img{img}</div>
      <div>{track_name}</div>
      <div>{author_name}</div>
      <div>
        <ReactAudioPlayer className="audioPlayer" src={preview_music} controls />
      </div>
    </div>
  );
}
