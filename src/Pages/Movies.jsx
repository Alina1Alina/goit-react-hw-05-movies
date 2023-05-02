import { useState, useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { MovieSearchApi } from 'Servise/MovieApi';
import { List, Item, LinkItem } from './Home.styled';
import SearchBox from 'components/SearchBox/SearchBox';

export const Movies = () => {
  const [value, setValue] = useState('');
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const query = searchParams.get('query');

  useEffect(() => {
    if (!query) {
      return;
    }
    const searchMovie = async () => {
      try {
        const data = await MovieSearchApi(query);
        setMovies(data.results);
      } catch (error) {
        console.log(error.message);
      }
    };
    searchMovie();

    
  }, [query]);

  const handleSubmit = e => {
    e.preventDefault();

    // setValue(e.target.elements.query.value);
    setSearchParams(
      value !== '' ? {} : { query: e.target.elements.query.value }
    );
    e.target.elements.query.value = '';
  };

  return (
    <>
       <SearchBox handleSubmit={handleSubmit} />
      <List>
        {movies.map(({ title, id }) => (
          <Item key={id}>
            <LinkItem to={`${id}`} state={{ from: location }}>
              {title}
            </LinkItem>
          </Item>
        ))}
      </List>
    </>
  );
};

export default Movies;