import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import s from './HomePage.module.css';
import { getTrendingMovies } from '../../services/apiService';
import Loader from '../../components/Loader/Loader';

export default function HomePage() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState();

  // console.log(trendingMovies);

  useEffect(() => {
    setStatus('pending');
    getTrendingMovies()
      .then(movies => {
        // console.log(movies);
        setTrendingMovies(movies.results);
        setStatus('resolved');
      })
      .catch(error => {
        setError(error);
        setStatus('rejected');
      });
  }, []);

  if (status === 'rejected') {
    return alert(error);
  }

  return (
    <>
      {status === 'pending' && <Loader />}
      {status === 'resolved' && (
        <div>
          <h2>Trending today</h2>
          <ul>
            {trendingMovies.map(movie => (
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
