import { useEffect, useState } from 'react';
import {
  NavLink,
  Route,
  Routes,
  useNavigate,
  useParams,
} from 'react-router-dom';
import s from './MovieDetailsPage.module.css';
import Loader from 'components/Loader/Loader';
import Movie from 'components/Movie/Movie';
import { getMovieDetails } from 'services/apiService';
// import Cast from 'components/Cast/Cast';
// import Reviews from 'components/Reviews/Reviews';
import { lazy, Suspense } from 'react/cjs/react.production.min';

const Cast = lazy(() => import('components/Cast/Cast'));
const Reviews = lazy(() => import('components/Reviews/Reviews'));

export default function MovieDetailsPage() {
  const [movie, setMovie] = useState(null);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState();
  const { movieId } = useParams();
  const navigate = useNavigate();

  // console.log(location?.state?.from);

  function handleGoBack() {
    navigate('/movies');
  }

  useEffect(() => {
    setStatus('pending');
    getMovieDetails(movieId)
      .then(film => {
        setMovie(film);
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

  return (
    <>
      {status === 'pending' && <Loader />}
      {status === 'resolved' && (
        <>
          <button
            type="button"
            onClick={handleGoBack}
            style={{ margin: '10px', width: '80px', cursor: 'pointer' }}
          >
            Back
          </button>
          <Movie movie={movie} />
          <ul className={s.list}>
            <li className={s.item}>
              <NavLink className={s.link} to="cast">
                Cast
              </NavLink>
            </li>
            <li className={s.item}>
              <NavLink className={s.link} to="reviews">
                Reviews
              </NavLink>
            </li>
          </ul>
        </>
      )}
      <Suspense fallback={<h3>Loading...</h3>}>
        <Routes>
          <Route path="cast" element={<Cast movieId={movieId} />} />
          <Route path="reviews" element={<Reviews movieId={movieId} />} />
        </Routes>
      </Suspense>
    </>
  );
}
