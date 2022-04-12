import React from "react";
import Header from "../Header/Header";

export default function HomePage() {
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
          <div className="recommendation">------------</div>
        </div>
      </div>
    </div>
  );
}
