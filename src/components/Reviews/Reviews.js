import { useState, useEffect } from 'react';
import propTypes from 'prop-types';
import { getReviews } from 'services/apiService';
import Loader from 'components/Loader/Loader';
// import s from './Reviews.module.css';

export default function Reviews({ movieId }) {
  const [reviews, setReviews] = useState([]);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState();

  useEffect(() => {
    setStatus('pending');
    getReviews(movieId)
      .then(movie => {
        setReviews(movie.results);
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

  if (reviews.length === 0) {
    return <h3>We don't have any reviews for this movie.</h3>;
  }

  return (
    <>
      {status === 'pending' && <Loader />}
      {status === 'resolved' && (
        <ul>
          {reviews.map(({ id, author, content }) => {
            return (
              <li key={id}>
                <h3>Author: {author}</h3>
                <p>{content}</p>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}

Reviews.propTypes = {
  movieId: propTypes.string,
};
