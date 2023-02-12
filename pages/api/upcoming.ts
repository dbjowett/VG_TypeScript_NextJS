import type { NextApiRequest, NextApiResponse } from 'next';
import igdb from './utils/igdb';

type Data = {
  name: string;
};

const timeNow = Math.floor(Date.now() / 1000);
const options = {
  method: 'POST',
  data: `
        fields name, release_dates.*, summary, screenshots.image_id, cover.*, rating, genres.name, platforms.*; 
        where platforms= (6,48,49,130,169,167) & cover != null & category = 0 
        & first_release_date != n & first_release_date >${timeNow}; 
        sort first_release_date asc; 
        limit 20;
            `,
  url: '/games/',
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const { data } = await igdb(options);
  res.status(200).send(data);
}
