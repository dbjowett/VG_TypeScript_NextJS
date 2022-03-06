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
