import propTypes from 'prop-types';
import s from './Movie.module.css';

export default function Movie({ movie }) {
  return (
    <>
      <div className={s.container}>
        <div className={s.poster}>
          <img
            className={s.image}
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
                : 'https://dummyimage.com/300x450/c7c7c7/0011ff&text=No+image'
            }
            alt={movie.title}
          />
        </div>
        <div className={s.movieInfo}>
          <h2>
            {movie.title} ({movie.release_date.slice(0, 4)})
          </h2>
          <p>User Score: {movie.vote_average * 10}%</p>
          <h3>Overview</h3>
          <p>{movie.overview}</p>
          <h4>Genres</h4>
          <ul>
            {movie.genres.map(({ id, name }) => {
              return <li key={id}>{name}</li>;
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

Movie.propTypes = {
  movie: propTypes.object.isRequired,
};
