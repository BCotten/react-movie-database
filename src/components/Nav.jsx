import React from 'react';
import { NavLink } from 'react-router-dom';

/**
 * Renders the navigation bar for the application.
 * 
 * @returns {JSX.Element} A navigation component with links to Home, About, and Favorites pages.
 * @description Creates a responsive navigation menu using React Router's NavLink components.
 * Each link is styled to appear bold when the corresponding route is active.
 */
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
