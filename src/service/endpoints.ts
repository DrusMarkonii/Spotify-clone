import axios from "axios";

const MY_PLAYLISTS_ENDPOINT = "https://api.spotify.com/v1/me/playlists";
const MY_TRACKS_ENDPOINT = "https://api.spotify.com/v1/me/tracks";
const MY_PROFILE_ENDPOINT = "https://api.spotify.com/v1/me";
const NEW_RELEASES = "https://api.spotify.com/v1/browse/featured-playlists";

export const getAuthorization = () => {
  const token = localStorage.getItem("accessToken");
  const tokenType = localStorage.getItem("tokenType");
  const authKeyData = `${tokenType} ${token}`;

  if (!authKeyData) {
    return "";
  }
  return authKeyData;
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

export const getPlayList = async () => {
  try {
    const response = await axios.get(MY_PLAYLISTS_ENDPOINT, {
      headers: {
        Authorization: getAuthorization(),
      },
    });
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

export const getMyTracks = async () => {
  try {
    const response = await axios.get(MY_TRACKS_ENDPOINT, {
      headers: {
        Authorization: getAuthorization(),
      },
    });
    return response.data
  } catch (e) {
    console.log(e);
  }
};

export const getMyData = async () => {
  try {
    const response = await axios
    .get(MY_PROFILE_ENDPOINT, {
      headers: {
        Authorization: getAuthorization(),
      },
    })
    return response.data
  } catch (e) {
    console.log(e);
  }
};

export const getNewReleases = async () => {
  try {
    const response = await axios
    .get(NEW_RELEASES, {
      params: {
        limit: 10,
      },
      headers: {
        Authorization:  getAuthorization(),
        "Content-Type": "application/json",
      },
    })
    return response.data
  } catch (e) {
    console.log(e);
  }
};