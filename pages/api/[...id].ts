import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  console.log(req.query.id);
  //   const games = await fetchSearched(input);
  res.status(200).send('hello');
}
