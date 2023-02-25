import { dehydrate, QueryClient, useQuery } from '@tanstack/react-query';
import { GetStaticProps } from 'next';
import Grid from '../components/Grid';
import Loader from '../components/Loader';
import { getPopular } from './api/popular';

const Popular = ({}) => {
  const { data, isLoading } = useQuery({ queryKey: ['popular'], queryFn: getPopular });
  if (isLoading) return <Loader />;
  return <Grid games={data} />;
};

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(['popular'], getPopular);
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default Popular;
