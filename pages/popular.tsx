import { GetStaticProps } from 'next';

const Popular = ({}) => {
  return <div>Popular</div>;
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  return {
    props: {
      data: null
    }
  };
};

export default Popular;
