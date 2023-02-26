import { NextApiRequest, NextApiResponse } from 'next';
import { Game, SingleGameType } from '../../types';
import igdb from './utils/igdb';

const options = {
  method: 'POST',
  data: 'fields *; ',
  url: '/games/',
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  const gameId = req?.query?.id[0] || '';
  options.data = options.data += `where id = ${gameId};`;
  const { data } = await igdb(options);
  res.status(200).send(data);
  return data as SingleGameType;
}
