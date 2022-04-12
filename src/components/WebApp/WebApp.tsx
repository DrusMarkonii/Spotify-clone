import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAuthorizeUrl, setDataInLocalStorage } from "../../service/authorization";
import GetPlaylist from "./GetPlaylist";

export default function WebApp() {
  const navigate = useNavigate();

  useEffect(() => {
    setDataInLocalStorage()
  }, []);

  

  const handleLogin = () => {
    window.location.href = getAuthorizeUrl();
    navigate("/");
    
  };
  return (
    <div>
      <h1>hi</h1>
      <button onClick={handleLogin}>log in</button>
      <GetPlaylist />
    </div>
  );
}
