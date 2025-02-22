import React from 'react';
import { NavLink } from 'react-router-dom';
import { HomeIcon, FavoritesIcon, AboutIcon } from './Icons';

const navItems = [
  {
    path: '/',
    label: 'Home',
    icon: <HomeIcon className='size-8 md:hidden'/>,
    logo: '../../src/assets/moviefix-logo.png',
  },
  {
    path: '/about',
    label: 'About',
    icon: <AboutIcon className='size-8 md:hidden'/>,
  },
  {
    path: '/favorites',
    label: 'Favorites',
    icon: <FavoritesIcon className='size-8 md:hidden'/>,
  },
];

const getNavLinkClass = (isActive) =>
  `flex flex-col items-center hover:text-(--color-neutral-light) md:p-3 md:bg-(--color-accent-blue-300)/10 md:bg-clip-padding md:backdrop-filter md:backdrop-blur-sm md:backdrop-saturate-100 md:backdrop-contrast-100 md:rounded-md md:border md:border-(--color-accent-blue-300) ${
    isActive ? 'font-bold' : 'md:font-medium'
  }`;

export default function Nav() {
  return (
    <nav className="md:bg-transparent md:text-xl md:px-10 md:block md:top-0 md:bottom-auto md:static text-base font-base fixed z-[999] bottom-0 left-0 right-0 text-(--color-accent-blue-600) md:text-(--color-neutral-dark) bg-(--color-neutral-dark)">
      <ul className="md:justify-end md:gap-20 flex justify-around items-center p-2.5">
        {navItems.map((item, index) => (
          <li key={item.path} className={index === 0 ? 'md:mr-auto' : ''}>
            <NavLink
              className={({ isActive }) => getNavLinkClass(isActive)}
              to={item.path}
            >
              {item.icon}
              <span className={index === 0 ? 'md:hidden' : ''}>{item.label}</span>
              {index === 0 && (
                <img
                  src={item.logo}
                  alt="moviefix"
                  className="hidden md:block"
                />
              )}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}