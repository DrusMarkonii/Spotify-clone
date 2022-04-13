import { NavLink, useNavigate } from "react-router-dom";
import { getAuthorizeUrl } from "../../service/authorization";

import "./Header.css";

export default function Header() {
  const navigate = useNavigate();
  const navigation = [
    { id: 1, title: "Spotify", path: "/" },
    { id: 2, title: "My music", path: "/my_music" },
    { id: 4, title: "Entertainment", path: "/entertainment" },
  ];

  const handleLogin = () => {
    window.location.href = getAuthorizeUrl();
    navigate("/");
  };

  const handleLogOut = () => {
    localStorage.clear();
  };

  return (
    <div className="headerBox">
      <nav>
        <ul className="navList">
          {navigation.map(({ id, title, path }) => (
            <li key={id} className="navbar__list__item">
              <NavLink to={path}>{title}</NavLink>
            </li>
          ))}
          {localStorage.getItem("accessToken") ? (
            <button onClick={handleLogOut}>Log out</button>
          ) : (
            <button onClick={handleLogin}>Log in</button>
          )}
        </ul>
      </nav>
    </div>
  );
}
