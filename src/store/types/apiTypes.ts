export type ArtistType = {
    external_urls: {
      spotify: string;
    };
    followers: {
      href: null;
      total: number;
    };
    genres: [string];
    href: string;
    id: string;
    images: [{ height: number; url: string; width: number }] | any;
    name: string;
    popularity: number;
    type: string;
    uri: string;
  };

  
  export type albumType = {
    href: string;
    limit: number;
    next: string;
    offset: number;
    previous: null;
    total: number;
    items: [
      {
        album_group: string;
        album_type: string;
        href: string;
        id: string;
        name: string;
        release_date: string;
        release_date_precision: string;
        total_tracks: number;
        type: string;
        uri: string;
        images: any;
      }
    ];
  };

 export type topTracksType = {
    tracks: [
      {
        href: string;
        id: string;
        is_local: boolean;
        is_playable: boolean;
        name: string;
        popularity: number;
        preview_url: any;
        track_number: number;
        type: string;
        uri: string;
        disc_number: number;
        duration_ms: number;
        explicit: boolean;
        album: {
          album_type: string;
          href: string;
          id: string;
          name: string;
          release_date: string;
          release_date_precision: string;
          total_tracks: number;
          type: string;
          uri: string;
          artists: any;
          external_urls: any;
          images: any;
        };
        artists: [any];
        external_ids: {
          isrc: string;
        };
        external_urls: {
          spotify: string;
        };
      }
    ];
  };