import { GetStaticProps } from 'next';
import Grid from '../components/Grid';
import { dehydrate, QueryClient, useQuery } from '@tanstack/react-query';
import Loader from '../components/Loader';
import { getUpcoming } from './api/upcoming';

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
