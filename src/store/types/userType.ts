export const GET_TOKEN = "GET_TOKEN";
export const GET_MY_TRACKS = "GET_MY_TRACKS";
export const AXIOS_GET_MY_TRACKS = "AXIOS_GET_MY_TRACKS";
export const GET_MY_DATA = "GET_MY_DATA";
export const AXIOS_GET_MY_DATA = "AXIOS_GET_MY_DATA";
export const GET_NEW_RELEASES = "GET_NEW_RELEASES";
export const AXIOS_GET_NEW_RELEASES = "AXIOS_GET_NEW_RELEASES";
export const GET_MY_ARTISTS = "GET_MY_ARTISTS";
export const AXIOS_GET_MY_ARTISTS = "AXIOS_GET_MY_ARTISTS";

export interface defaultStateUserType {
  token: null | string;
  myTracks: null | myTracksType;
  myData: any;
  newReleases: any;
  myArtists: any;
}

type myTracksType = {
  href: string;
  items: [
    {
      added_at: string;
      track: {
        href: string;
        id: string;
        is_local: boolean;
        name: string;
        popularity: number;
        preview_url: string;
        track_number: number;
        type: string;
        uri: string;
        disc_number: number;
        duration_ms: number;
        explicit: boolean;
        album: any;
        artists: [any];
        available_markets: [string];
        external_ids: {
          isrc: string;
        };
        external_urls: {
          spotify: string;
        };
      };
    }
  ];
  limit: number;
  next: null;
  offset: number;
  previous: null;
  total: number;
};
