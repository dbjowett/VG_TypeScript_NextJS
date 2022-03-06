import { GetStaticProps } from 'next';

const Upcoming = ({}) => {
  return <div>Upcoming Page</div>;
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  return {
    props: {
      data: null
    }
  };
};

export default Upcoming;
