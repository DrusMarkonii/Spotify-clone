import React from "react";
import { NavLink } from "react-router-dom";
import './Header.css'

export default function Header() {
  const navigation = [
    { id: 1, title: "Spotify", path: "/" },
    { id: 2, title: "My music", path: "/music" },
    { id: 3, title: "Playlists", path: "/playlists" },
    { id: 4, title: "Entertainment", path: "/entertainment" },
  ];

  return (
    <div className='headerBox'>
      <nav>
        <ul className="navList">
          {navigation.map(({id, title, path }) => ( <li key={id} className="navbar__list__item"><NavLink to={path}>{title}</NavLink></li>))}
        </ul>
      </nav>
    </div>
  );
}
