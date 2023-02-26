import igdb from './utils/igdb';
import { Game } from '../../types';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse<Game[]>) {
  const { data } = await igdb(req.body);
  res.status(200).send(data);
  return data as Game[];
}
