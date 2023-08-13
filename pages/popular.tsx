import { dehydrate, QueryClient } from '@tanstack/react-query';
import { GetStaticProps } from 'next';

import Grid from '../components/Grid';
import Loader from '../components/Loader';
import { fetchPopularSsr, usePopular } from '../hooks/usePopular';

const Popular = () => {
  const { data, isLoading } = usePopular();
  if (isLoading || !data) return <Loader />;
  return <Grid games={data} />;
};

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(['popular'], fetchPopularSsr);
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default Popular;
