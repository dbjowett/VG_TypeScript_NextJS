import { GetStaticProps } from 'next';

const Search = ({}) => {
  return <div>Search</div>;
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  return {
    props: {
      data: null
    }
  };
};

export default Search;
