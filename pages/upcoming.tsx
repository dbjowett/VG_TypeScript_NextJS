import { GetStaticProps } from 'next';
import axios from 'axios';
import Grid from '../components/Grid';
import { Game } from '../types';
import { dehydrate, QueryClient, useQuery } from '@tanstack/react-query';
import Loader from '../components/Loader';

interface GameProps {
  games: Game[];
}

const getUpcoming = async () => {
  const { data } = await axios.get('http://localhost:3000/api/upcoming');
  return data as Game[];
};

const Upcoming = () => {
  const { data, isLoading } = useQuery({ queryKey: ['upcoming'], queryFn: getUpcoming });
  if (isLoading) return <Loader />;
  return <Grid games={data} />;
};

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(['upcoming'], getUpcoming);
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default Upcoming;
