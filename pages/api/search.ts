import type { NextApiRequest, NextApiResponse } from 'next';
import igdb from './utils/igdb';
import { Game } from '../../types';

interface Games {
  games: Game[];
}

const fetchSearched = async (term: string) => {
  const response = await igdb({
    method: 'POST',
    data: `
      search "${term}";
      fields name, first_release_date, release_dates.human, genres.name, platforms.abbreviation, total_rating, summary, category, screenshots.image_id, videos.*, cover.url;
      where rating != null & category = 0;
      limit 20;
      `,
    url: '/games/',
  });
  return response;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Games>) {
  let input: string | string[] | undefined;
  if (req.query && req.query.input) {
    input = req.query.input.toString();
  } else {
    input = '';
  }
  const games = await fetchSearched(input);
  res.status(200).send(games.data);
}
