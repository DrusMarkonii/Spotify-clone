const Client_ID = "2f729c45f0964a559ea845edb60911c6";

const scope = [
  "user-read-playback-state",
  "user-modify-playback-state",
  "user-read-currently-playing",
  "user-read-private",
  "user-read-email",
  "user-follow-modify",
  "user-follow-read",
  "user-library-modify",
  "user-library-read",
  "streaming",
  "app-remote-control",
  "user-read-playback-position",
  "user-top-read",
  "user-read-recently-played",
  "playlist-modify-private",
  "playlist-read-collaborative",
  "playlist-read-private",
  "playlist-modify-public",
];

export const getAuthorizeUrl = () => {
  let url = "https://accounts.spotify.com/authorize?";
  url += "response_type=token";
  url += "&client_id=" + Client_ID;
  url += "&scope=" + scope.join("+");
  url += "&redirect_uri=https://drus-spotify.netlify.app/";
  return url;
};

export const getDataFromHash = (hash: string) => {
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

export const setDataInLocalStorage = () => {
  if (window.location.hash) {
    const { access_token, token_type, expires_in } = getDataFromHash(
      window.location.hash
    );
    localStorage.clear();
    localStorage.setItem("accessToken", access_token);
    localStorage.setItem("tokenType", token_type);
    localStorage.setItem("expiresIn", `${expires_in}`);
  }
};
