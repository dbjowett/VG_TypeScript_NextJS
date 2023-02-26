import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { server } from './api/utils/server';
import axios from 'axios';
import { getID } from './utils';
import Loader from '../components/Loader';
import { SingleGameType } from '../types';

export default function SingleGame() {
  const [gameData, setGameData] = useState<SingleGameType | null>(null);
  const getCurrentGame = async (id: string) => await axios.get(`${server}/api/${id}`);

  const router = useRouter();
  const {
    query: { id },
  } = router;

  useEffect(() => {
    if (!id) return;
    let gameId = Array.isArray(id) ? id.find((item) => item !== 'games') : id;

    async function fetchData(gameId: string) {
      const res = await getCurrentGame(gameId);
      setGameData(res.data[0] as SingleGameType);
    }
    gameId && fetchData(gameId);
  }, [id]);

  if (!gameData) {
    return <Loader />;
  }

  return (
    <div>
      <h1>{gameData.name}</h1>
      <div>{gameData.summary}</div>
    </div>
  );
}
