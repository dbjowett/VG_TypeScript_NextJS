import type { NextApiRequest, NextApiResponse } from 'next';
import igdb from '../../utils/igdb';
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
    url: '/games/'
  });
  return response;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Games>) {
  const games = await fetchSearched(req.query.input.toString());
  res.status(200).send(games.data);
}

// module.exports = (app) => {
//   app.get('/api/search', async (req, res) => {
//     const { data } = await fetchSearched(req.query.term);
//     res.send(data);
//   });
// };
