import { NavLink } from 'react-router-dom';

import s from './AppBar.module.css';

export default function AppBar() {
  return (
    <header className={s.header}>
      <nav>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? s.activeLink : s.link)}
        >
          Home
        </NavLink>
        <NavLink
          to="/articles"
          className={({ isActive }) => (isActive ? s.activeLink : s.link)}
        >
          Articles
        </NavLink>
        <NavLink
          to="/edit"
          className={({ isActive }) => (isActive ? s.activeLink : s.link)}
        >
          Editor
        </NavLink>
      </nav>
    </header>
  );
}
