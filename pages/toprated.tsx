import { GetStaticProps } from 'next';
import { dehydrate, QueryClient } from '@tanstack/react-query';

import Loader from '../components/Loader';
import Grid from '../components/Grid';
import { fetchTopRatedSsr, useTopRated } from '../hooks/useTopRated';

const TopRated = () => {
  const { data, isLoading } = useTopRated();
  if (isLoading || !data) return <Loader />;
  return <Grid games={data} />;
};

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(['toprated'], fetchTopRatedSsr);
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default TopRated;
