import type { NextApiRequest, NextApiResponse } from 'next';
import igdb from './utils/igdb';

type Data = {
  name: string;
};

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

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const { data } = await igdb(options);
  res.status(200).send(data);
}
