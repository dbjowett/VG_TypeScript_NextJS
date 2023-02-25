import { Game } from '../../types';
import igdb from './utils/igdb';

const options = {
  method: 'POST',
  data: `
      fields name, rating, rating_count, release_dates.*, summary, screenshots.image_id, cover.*, rating, genres.name, platforms.*;
      where platforms= (6,48,49,130,169,167) & cover != null & category = 0 & rating > 9 & rating_count > 100;
      sort rating desc;
      limit 20;
      `,
  url: '/games/',
};

export const getTopRated = async () => {
  const { data } = await igdb(options);
  return data as Game[];
};
