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
  ${
    isActive
      ? 'font-bold text-[#9fc4e4] md:text-[#9fc4e4]'
      : 'text-white hover:font-bold md:hover:underline'
  }`;

export default function Nav() {
  return (
    <>
      <NavLink to="/" aria-label="Moviefix Home">
        <div className="absolute top-0 left-0 z-[1000] p-4 md:p-6">
          <NavLink to="/" aria-label="Moviefix Home">
            <img
              src={navItems[0].logo}
              alt="moviefix"
              className="w-32 md:w-40 lg:w-48"
            />
          </NavLink>
        </div>
      </NavLink>
      <nav className="fixed bottom-0 left-0 right-0 z-[999] bg-[--color-neutral-dark] md:static md:bg-transparent w-full font-[--font-base]">
        <ul className="bg-(--color-neutral-dark) flex justify-around md:justify-end items-center p-4 md:py-6 md:px-10 md:gap-20">
          {navItems.map((item, index) => (
            <li key={item.path} className={index === 0 ? 'md:hidden' : ''}>
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
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
