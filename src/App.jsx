import { Routes, Route } from 'react-router-dom';
import Container from 'components/Container/Container';
import AppBar from './components/AppBar/AppBar';
// import MovieDetailsPage from './views/MovieDetailsPage/MovieDetailsPage';
// import HomePage from './views/HomePage/HomePage';
// import MoviesPage from './views/MoviesPage/MoviesPage';
import { lazy, Suspense } from 'react/cjs/react.production.min';
import Loader from 'components/Loader/Loader';

const HomePage = lazy(() =>
  import('./views/HomePage/HomePage' /* webpackChunkName: "HomePage"*/)
);
const MoviesPage = lazy(() =>
  import('./views/MoviesPage/MoviesPage' /* webpackChunkName: "MoviePage"*/)
);
const MovieDetailsPage = lazy(() =>
  import(
    './views/MovieDetailsPage/MovieDetailsPage' /* webpackChunkName: "MovieDetailsPage"*/
  )
);
export default function App() {
  return (
    <>
      <Container>
        <AppBar />

        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" exact element={<HomePage />} />
            <Route path="/movies" element={<MoviesPage />} />
            <Route path="/movies/:movieId/*" element={<MovieDetailsPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </Suspense>
      </Container>
    </>
  );
}
