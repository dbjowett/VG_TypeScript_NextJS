import React from 'react';
import { useRouter } from 'next/router';
import { server } from './api/utils/server';
import axios from 'axios';
import { getID } from './utils';

const getCurrentGame = async (id: string) => await axios.get(`${server}/api/${id}`);

export default function SingleGame() {
  const router = useRouter();
  const { id } = router.query;
  if (!id) return <div>No Data</div>;

  const data = getCurrentGame(getID(id));

  return <div>SingleGame: {JSON.stringify(data)}</div>;
}
