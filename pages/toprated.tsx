import { dehydrate, QueryClient, useQuery } from '@tanstack/react-query';
import { GetStaticProps } from 'next';
import Grid from '../components/Grid';
import Loader from '../components/Loader';
import { getTopRated } from './api/toprated';

const TopRated = () => {
  const { data, isLoading } = useQuery({ queryKey: ['upcoming'], queryFn: getTopRated });
  if (isLoading) return <Loader />;
  return <Grid games={data} />;
};

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(['toprated'], getTopRated);
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default TopRated;
