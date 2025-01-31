import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Nav() {
  return (
    <nav>
      <h1>Navigation</h1>
      <ul className="flex space-x-4 m-2.5">
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? 'font-bold' : '')}
            to="/"
          >
            Home
          </NavLink>{' '}
          {/* Replace with your logo image here */}
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? 'font-bold' : '')}
            to="/about"
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? 'font-bold' : '')}
            to="/favorites"
          >
            Favorites
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
