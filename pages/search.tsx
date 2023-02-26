import { useState } from 'react';
import Grid from '../components/Grid';
import SearchForm from '../components/SearchForm';
import Loader from '../components/Loader';

const Search = () => {
  const [games, setGames] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <SearchForm setGames={setGames} setIsLoading={setIsLoading} />
      {!isLoading && games && <Grid games={games} />}
      {isLoading && <Loader />}
    </div>
  );
};

export default Search;
