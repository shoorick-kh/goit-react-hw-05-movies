import { NavLink } from 'react-router-dom';
import s from './AppBar.module.css';

export default function AppBar() {
  return (
    <>
      <header>
        <nav className={s.navi}>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? s.activeLink : s.link)}
          >
            Home
          </NavLink>
          <NavLink
            to="/movies"
            className={({ isActive }) => (isActive ? s.activeLink : s.link)}
          >
            Movies
          </NavLink>
        </nav>
      </header>
    </>
  );
}
