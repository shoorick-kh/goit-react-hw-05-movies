import { Routes, Route } from 'react-router-dom';
import Container from 'components/Container/Container';
import AppBar from './components/AppBar/AppBar';
// import MovieDetailsPage from './views/MovieDetailsPage/MovieDetailsPage';
// import HomePage from './views/HomePage/HomePage';
// import MoviesPage from './views/MoviesPage/MoviesPage';
import { lazy, Suspense } from 'react/cjs/react.production.min';

const HomePage = lazy(() => import('./views/HomePage/HomePage'));
const MoviesPage = lazy(() => import('./views/MoviesPage/MoviesPage'));
const MovieDetailsPage = lazy(() =>
  import('./views/MovieDetailsPage/MovieDetailsPage')
);
export default function App() {
  return (
    <>
      <Container>
        <AppBar />

        {/* <Suspense fallback={<h3>Loading...</h3>}> */}
        <Suspense>
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
