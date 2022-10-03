import { useState, useEffect } from 'react';
import propTypes from 'prop-types';
import { getCast } from 'services/apiService';
import Loader from 'components/Loader/Loader';
// import s from './Cast.module.css';

export default function Cast({ movieId }) {
  const [cast, setCast] = useState(null);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState();

  useEffect(() => {
    setStatus('pending');
    getCast(movieId)
      .then(movie => {
        setCast(movie.cast);
        setStatus('resolved');
      })
      .catch(error => {
        setError(error);
        setStatus('rejected');
      });
  }, [movieId]);

  if (status === 'rejected') {
    return alert(error);
  }

  if (cast.length === 0) {
    return <h3>We don't have any casts for this movie.</h3>;
  }

  return (
    <>
      {status === 'pending' && <Loader />}
      {status === 'resolved' && (
        <ul>
          {cast.map(({ id, name, profile_path, character }) => {
            return (
              <li key={id}>
                <img
                  width="60px"
                  src={
                    profile_path
                      ? `https://image.tmdb.org/t/p/w300${profile_path}`
                      : 'https://dummyimage.com/60x120/c7c7c7/0011ff&text=No+foto'
                  }
                  alt={name}
                />
                <h4>{name}</h4>
                <p>{character}</p>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}

Cast.propTypes = {
  movieId: propTypes.string.isRequired,
};
