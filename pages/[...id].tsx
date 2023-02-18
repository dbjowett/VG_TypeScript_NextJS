import React from 'react';
import { useRouter } from 'next/router';
import { server } from './api/utils/server';
import axios from 'axios';

const getCurrentGame = async (id: number) => {
  const data = await axios.get(`${server}/api/${id}`);
};

export default function SingleGame() {
  const router = useRouter();
  const { id } = router.query;
  let ID = '';
  if (typeof id === 'object') {
    ID = id.reverse()[0];
  } else {
    ID = id || '';
  }

  if (ID) {
    const data = getCurrentGame(Number(ID));
    console.log(ID);
  } else {
    return <div>No Data</div>;
  }

  return <div>SingleGame: {ID}</div>;
}
