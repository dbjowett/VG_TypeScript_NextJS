import { Game } from '../../types';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import igdb from '../../pages/api/utils/igdb';
import { Platforms } from '../../pages/api/utils/constants';

const { PS5, XBOX_SERIES, PS4, SWITCH, STEAM_OS, PC } = Platforms;

const options = {
  method: 'POST',
  data: `
          fields name, rating, rating_count, release_dates.*, summary, screenshots.image_id, cover.*, rating, genres.name, platforms.*;
          where platforms= (${PS5},${XBOX_SERIES},${PS4},${PC},${SWITCH},${STEAM_OS}) & cover != null & category = 0 & rating > 9 & rating_count > 100;
          sort rating desc;
          limit 20;
              `,
  url: '/games/',
};

// Serverside Req
const fetchPopularSsr = async () => {
  const { data } = await igdb(options);
  return data;
};

// Clientside Req
const fetchPopular = async () => {
  const { data } = await axios.post('/api/popular', JSON.stringify(options), {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return data as Game[];
};

const usePopular = () => {
  return useQuery({
    queryKey: ['popular'],
    queryFn: fetchPopular,
  });
};

export { usePopular, fetchPopular, fetchPopularSsr };
