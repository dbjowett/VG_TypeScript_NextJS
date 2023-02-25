import { Dispatch, SetStateAction, useState } from 'react';
import axios from 'axios';
import styles from './searchForm.module.css';
import { server } from '../../pages/api/utils/server';

interface Props {
  setGames: Dispatch<SetStateAction<Array<any>>>;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}

export default function Grid({ setGames, setIsLoading }: Props) {
  const [input, setInput] = useState('');

  async function submitHandler(e: React.FormEvent<HTMLFormElement>) {
    setIsLoading(true);
    e.preventDefault();
    const { data } = await axios.get(`${server}/api/search/?input=${input} `);
    setGames(data);
    setInput('');
    setIsLoading(false);
  }

  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <h1>Search</h1>
      <div className={styles.inputAndButtonContainer}>
        <input id='input' type='text' placeholder='Enter game title..' value={input} onChange={(e) => setInput(e.target.value)} />
        <button type='submit'>Submit</button>
      </div>
    </form>
  );
}
