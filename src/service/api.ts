import axios from "axios";
import { getAuthorizeUrl } from "./authorization";


export const api = axios.create({
    baseURL: "https://api.spotify.com/v1/",
    headers: {
      "Content-Type": "application/json",
    },
  });


export const getAuthorization = () => {
    const authorization = localStorage.getItem("Authorization");
    if (!authorization) {
      return "";
    }
    return authorization;
  };

  export const getUserProfile = async () => {
    try {
      const response = await api({
        method: "GET",
        url: "me",
        headers: {
          Authorization: getAuthorization(),
        },
      });
      return response.data;
    } catch (error: any) {
      if (error.response.status === 400 || error.response.status === 401)
        window.location.href = getAuthorizeUrl();
  
      throw new Error(error.response.message);
    }
  };

  export const getUserTracks = async () => {
    try {
      const response = await api({
        method: "GET",
        url: "me/tracks",
        headers: {
          Authorization: getAuthorization(),
        },
      });
      return response.data;
    } catch (error: any) {
      if (error.response.status === 400 || error.response.status === 401)
        window.location.href = getAuthorizeUrl();
  
      throw new Error(error.response.message);
    }
  };
  