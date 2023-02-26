import { NextApiRequest, NextApiResponse } from 'next';
import { Game, SingleGameType } from '../../types';
import igdb from './utils/igdb';

const options = {
  method: 'POST',
  data: 'fields *; where id = {gameId};',
  url: '/games/',
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  if (!req.query.id) {
    res.status(500).send('Please attach an ID');
    return;
  }
  const gameId = req.query.id[0];
  options.data = options.data.replace('{gameId}', gameId);
  const { data } = await igdb(options);
  res.status(200).send(data);
  return data as SingleGameType;
}
