import React, { useEffect } from "react";
import { getAuthorizeUrl } from "../../service/authorization";
import GetPlaylist from "./GetPlaylist";

export default function WebApp() {
 

  useEffect(() => {
    if (window.location.hash) {
      const { access_token, token_type, expires_in } = getDataFromHash(
        window.location.hash
      );
      localStorage.clear();
      localStorage.setItem("accessToken", access_token);
      localStorage.setItem("tokenType", token_type);
      localStorage.setItem("expiresIn", `${expires_in}`);
    }
  }, []);
  const getDataFromHash = (hash: string) => {
    const arr = hash.slice(1).split("&");
    const access_token = arr[0].slice(13);
    const token_type = arr[1].slice(11);
    const expires_in = +arr[2].slice(11);
    return {
      access_token,
      token_type,
      expires_in,
    };
  };

  const handleLogin = () => {
    window.location.href = getAuthorizeUrl();
  };
  return (
    <div>
      <h1>hi</h1>
      <button onClick={handleLogin}>log in</button>
      <GetPlaylist />
    </div>
  );
}
