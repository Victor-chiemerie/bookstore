import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../styles/navbar.module.scss';

const links = [
  { path: '/', text: 'Books' },
  { path: 'categories', text: 'Catergories' },
];

const Nav = () => (
  <header className={styles.navbar}>
    <h1>BookStore CMC</h1>
    <nav>
      {links.map((link) => (
        <NavLink
          key={link.text}
          to={link.path}
          style={({ isActive }) => ({
            color: isActive ? 'black' : 'rgba(24, 24, 23, 0.263)', textDecoration: 'none',
          })}
        >
          {link.text}
        </NavLink>
      ))}
    </nav>
  </header>
);

export default Nav;
