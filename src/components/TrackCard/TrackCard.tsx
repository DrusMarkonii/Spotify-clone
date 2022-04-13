import ReactAudioPlayer from "react-audio-player";
import "./TrackCard.css";

type TrackCardTypes = {
  track_name: string;
  author_name: string;
  preview_music: string ;
};

export default function TrackCard({
  track_name,
  author_name,
  preview_music,
}: TrackCardTypes) {
  return (
    <div className="track_card">
      <div className="track_card_description_box">
        <div>
          <b>{author_name}</b>
        </div>
        <div>{track_name}</div>
      </div>
      <div className="track_card_player">
        <ReactAudioPlayer
          className="track_audioPlayer"
          src={preview_music}
          controls
        />
      </div>
    </div>
  );
}
