import { useEffect, useState } from 'react';
import Searchbar from '../../components/SearchBar/SearchBar';
import { getMovieByQuery } from 'services/apiService';
import Loader from 'components/Loader/Loader';
import {
  Link,
  useLocation,
  useNavigate,
  useSearchParams,
} from 'react-router-dom';
import s from './MoviesPage.module.css';

export default function MoviesPage() {
  // const [movieQuery, setMovieQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState();
  const [searchParams] = useSearchParams();

  const location = useLocation();
  const navigate = useNavigate();

  const searchQuery = searchParams.get('query');
  // console.log(searchQuery);

  const onSubmitForm = query => {
    // setMovieQuery(query);
    navigate({ ...location, search: `query=${query}` });
  };

  useEffect(() => {
    if (!searchQuery) {
      return;
    }
    setStatus('pending');
    getMovieByQuery(searchQuery)
      .then(films => {
        setMovies(films.results);
        setStatus('resolved');
      })
      .catch(error => {
        setError(error);
        setStatus('rejected');
      });
  }, [searchQuery]);

  if (status === 'rejected') {
    return alert(error);
  }

  return (
    <>
      <Searchbar onSubmitForm={onSubmitForm} />
      {status === 'pending' && <Loader />}
      {status === 'resolved' && (
        <div>
          <ul>
            {movies.map(movie => (
              <li key={movie.id}>
                <Link
                  className={s.link}
                  to={`/movies/${movie.id}`}
                  state={{ from: location }}
                >
                  {movie.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
