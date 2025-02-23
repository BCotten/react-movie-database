import React from 'react';
import { NavLink } from 'react-router-dom';
import { HomeIcon, FavoritesIcon, AboutIcon } from './Icons';

const navItems = [
  {
    path: '/',
    label: 'Home',
    icon: <HomeIcon className="size-8 md:hidden text-white" />,
    logo: '../../src/assets/moviefix-logo.png',
  },
  {
    path: '/about',
    label: 'About',
    icon: <AboutIcon className="size-8 md:hidden text-white" />,
  },
  {
    path: '/favorites',
    label: 'Favorites',
    icon: <FavoritesIcon className="size-8 md:hidden text-white" />,
  },
];

const getNavLinkClass = (isActive) =>
  `flex flex-col items-center font-base text-sm md:text-base
   ${isActive
    ? 'font-bold text-[--color-accent-blue-600] md:text-[--color-accent-blue-600]'
    : 'text-white hover:font-bold md:hover:underline'
  }`;

export default function Nav() {
  return (
    <nav className="fixed bottom-35 left-0 right-0 z-[999] bg-[--color-neutral-dark] md:static md:bg-transparent w-full font-[--font-base]">

      <ul className="bg-(--color-neutral-dark) flex justify-around md:justify-end items-center p-2.5 pb-4 md:pb-2.5 md:px-10 md:gap-20">
        {navItems.map((item, index) => (
          <li key={item.path} className={index === 0 ? 'md:mr-auto' : ''}>
            <NavLink
              className={({ isActive }) => getNavLinkClass(isActive)}
              to={item.path}
            >
              {item.icon && (
                <div className="md:hidden">
                  {React.cloneElement(item.icon, { className: 'size-10' })}
                </div>
              )}
              {index !== 0 && (
                <span className="hidden md:inline">{item.label}</span>
              )}
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
