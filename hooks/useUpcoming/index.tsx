import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Platforms } from '../../pages/api/utils/constants';
import igdb from '../../pages/api/utils/igdb';
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

// Serverside Req
const fetchUpcomingSsr = async () => {
  const { data } = await igdb(options);
  return data;
};

// Clientside Req
const fetchUpcoming = async () => {
  const { data } = await axios.post('/api/upcoming', JSON.stringify(options), {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return data as Game[];
};

const useUpcoming = () => {
  return useQuery({
    queryKey: ['upcoming'],
    queryFn: fetchUpcoming,
  });
};

export { fetchUpcoming, fetchUpcomingSsr, useUpcoming };
