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
  genres: Object[][];
  name: String;
  platforms: Object[];
  release_dates: Object[][];
  screenshots: Object[][];
  summary: String;
}
