import { useEffect, useState } from 'react';
import Searchbar from '../../components/SearchBar/SearchBar';
import { getMovieByQuery } from 'services/apiService';
import Loader from 'components/Loader/Loader';
import { NavLink } from 'react-router-dom';
import s from './MoviesPage.module.css';

export default function MoviesPage() {
  const [movieQuery, setMovieQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState();

  const onSubmitForm = query => {
    setMovieQuery(query);
  };

  useEffect(() => {
    if (movieQuery === '') {
      return;
    }
    setStatus('pending');
    getMovieByQuery(movieQuery)
      .then(films => {
        setMovies(films.results);
        setStatus('resolved');
      })
      .catch(error => {
        setError(error);
        setStatus('rejected');
      });
  }, [movieQuery]);

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
                <NavLink className={s.link} to={`/movies/${movie.id}`}>
                  {movie.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
