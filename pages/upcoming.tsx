import { GetStaticProps } from 'next';
import axios from 'axios';
import Grid from '../components/Grid';
import { Game } from '../types';

interface GameProps {
  data: Game[];
}

const Upcoming = ({ data }: GameProps) => {
  return <Grid data={data} />;
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await axios.get('http://localhost:3000/api/upcoming');
  console.log('DATA FROM FRONT END', data);
  const name = 'Daniel';
  return {
    props: {
      data
    }
  };
};

export default Upcoming;
