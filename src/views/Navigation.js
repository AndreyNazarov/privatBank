import { NavLink } from 'react-router-dom';
import s from '../styles/header.module.css';

const Navigation = () => (
  <header className={s.header}>
    <nav className={s.nav}>
      <NavLink to="/" className={s.link} activeClassName={s.activeLink} exact>
        Home
      </NavLink>
      <NavLink to="/options" className={s.link} activeClassName={s.activeLink}>
        More options
      </NavLink>
    </nav>
  </header>
);

export default Navigation;
