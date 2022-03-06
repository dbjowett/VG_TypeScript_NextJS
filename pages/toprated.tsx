import { GetStaticProps } from 'next';

const TopRated = ({}) => {
  return <div>Top Rated</div>;
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  return {
    props: {
      data: null
    }
  };
};

export default TopRated;
