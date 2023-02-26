export interface Game {
  id: Number;
  cover: {
    id: Number;
    alpha_channel: Boolean;
    animated: Boolean;
    game: Number;
    height: Number;
    image_id: String;
    url: String;
    width: Number;
    checksum: String;
  };
  genres: { id: Number; name: String }[];
  name: String;
  platforms: Object[];
  release_dates: {
    id: Number;
    category: Number;
    created_at: Number;
    date: Number;
    game: Number;
    human: String;
    m: Number;
    platform: Number;
    region: Number;
    updated_at: Number;
    y: Number;
    checksum: String;
  }[];
  screenshots: { id: Number; image_id: String }[];
  summary: String;
}

export interface SingleGameType {
  id: number;
  artworks: number[];
  category: number;
  cover: number;
  created_at: number;
  external_games: number[];
  first_release_date: number;
  game_modes: number[];
  genres: number[];
  hypes: number;
  involved_companies: number[];
  keywords: number[];
  name: string;
  platforms: number[];
  release_dates: number[];
  screenshots: number[];
  similar_games: number[];
  slug: string;
  summary: string;
  tags: number[];
  updated_at: number;
  url: string;
  videos: number[];
  websites: number[];
  checksum: string;
  language_supports: number[];
}
