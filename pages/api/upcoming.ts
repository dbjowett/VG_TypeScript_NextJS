import igdb from './utils/igdb';
import { Platforms } from './utils/constants';
import { Game } from '../../types';
const { PS5, XBOX_SERIES, PS4, SWITCH, STEAM_OS, PC } = Platforms;

const timeNow = Math.floor(Date.now() / 1000);
const options = {
  method: 'POST',
  data: `
        fields name, release_dates.*, summary, screenshots.image_id, cover.*, rating, genres.name, platforms.*; 
        where platforms= (${PS5},${XBOX_SERIES},${PS4},${PC},${SWITCH},${STEAM_OS}) & cover != null & category = 0 
        & first_release_date != n & first_release_date >${timeNow}; 
        sort first_release_date asc; 
        limit 20;
            `,
  url: '/games/',
};

export const getUpcoming = async () => {
  const { data } = await igdb(options);
  return data as Game[];
};
