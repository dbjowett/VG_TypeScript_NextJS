import { GetStaticProps } from 'next';
import axios from 'axios';
import Grid from '../components/Grid';
import { Game } from '../types';

interface GameProps {
  games: Game[];
}

const Upcoming = ({ games }: GameProps) => {
  return <Grid games={games} />;
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await axios.get('http://localhost:3000/api/upcoming');
  return {
    props: {
      games: data
    },
    revalidate: 6000
  };
};

export default Upcoming;
