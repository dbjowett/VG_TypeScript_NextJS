import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  const gameId = req?.query?.id[0] || '';

  console.log('Id', gameId);
  //   const games = await fetchSearched(input);
  res.status(200).send('hello');
}
