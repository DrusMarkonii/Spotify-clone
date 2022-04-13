import "./AlbumCard.css";

type AlbumCardTypes = {
  album_name: string;
  album_description: string;
  img: string;
};

export default function AlbumCard({
  album_name,
  album_description,
  img,
}: AlbumCardTypes) {
  return (
    <div className="album_card">
      <div>
        <img className="album-card_img" src={img} alt={album_name} />
      </div>
      <div className="album_description_box">
        <div>{album_name}</div>
        <div className="album_description_item">{album_description}</div>
      </div>
    </div>
  );
}
