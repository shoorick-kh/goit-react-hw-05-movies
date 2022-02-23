import { Routes, Route } from 'react-router-dom';
import Container from 'components/Container/Container';
import MovieDetailsPage from './views/MovieDetailsPage/MovieDetailsPage';
import AppBar from './components/AppBar/AppBar';
import HomePage from './views/HomePage/HomePage';
import MoviesPage from './views/MoviesPage/MoviesPage';

export default function App() {
  return (
    <>
      <Container>
        <AppBar />

        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId/*" element={<MovieDetailsPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </Container>
    </>
  );
}
