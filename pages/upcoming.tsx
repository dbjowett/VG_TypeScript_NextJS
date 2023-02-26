import { GetStaticProps } from 'next';
import { dehydrate, QueryClient } from '@tanstack/react-query';

import Loader from '../components/Loader';
import Grid from '../components/Grid';
import { fetchUpcomingSsr, useUpcoming } from '../hooks/useUpcoming';

const Upcoming = () => {
  const { data, isLoading } = useUpcoming();
  if (isLoading || !data) return <Loader />;
  return <Grid games={data} />;
};

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(['upcoming'], fetchUpcomingSsr);
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default Upcoming;
