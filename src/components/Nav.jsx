import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Nav() {
  return (
    <nav className="md:bg-transparent md:text-xl md:px-10 md:block md:top-0 md:bottom-auto md:static text-base font-(--font-base) fixed bottom-0 left-0 right-0 text-(--color-accent-blue-600) md:text-(--color-neutral-dark) bg-(--color-neutral-dark)">
      <ul className="md:justify-end md:gap-20 flex justify-around items-center p-2.5 ">
        <li className='md:mr-auto'>
          <NavLink
            className={({ isActive }) =>
              isActive ? 'md:hidden font-bold flex flex-col items-center hover:text-(--color-neutral-light)' : 'md:hidden flex flex-col items-center hover:text-(--color-neutral-light)'
            }
            to="/"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 md:hidden"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? 'hidden md:block' : 'hidden md:block'
            }
            to="/"
          >
            <img src="../../src/assets/moviefix-logo.png " alt="moviefix" />
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? 'font-bold flex flex-col items-center hover:text-(--color-neutral-light) md:p-3 md:bg-(--color-accent-blue-300)/10 md:bg-clip-padding md:backdrop-filter md:backdrop-blur-sm md:backdrop-saturate-100 md:backdrop-contrast-100 md:rounded-md md:border md:border-(--color-accent-blue-300)' : 'flex flex-col items-center hover:text-(--color-neutral-light) md:p-3 md:bg-(--color-accent-blue-300)/10 md:bg-clip-padding md:backdrop-filter md:backdrop-blur-sm md:backdrop-saturate-100 md:backdrop-contrast-100 md:rounded-md md:border md:border-(--color-accent-blue-300) md:font-medium')}
            to="/about"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 md:hidden"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
              />
            </svg>
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? 'font-bold flex flex-col items-center hover:text-(--color-neutral-light) md:p-3 md:bg-(--color-accent-blue-300)/10 md:bg-clip-padding md:backdrop-filter md:backdrop-blur-sm md:backdrop-saturate-100 md:backdrop-contrast-100 md:rounded-md md:border md:border-(--color-accent-blue-300)' : 'flex flex-col items-center hover:text-(--color-neutral-light) md:p-3 md:bg-(--color-accent-blue-300)/10 md:bg-clip-padding md:backdrop-filter md:backdrop-blur-sm md:backdrop-saturate-100 md:backdrop-contrast-100 md:rounded-md md:border md:border-(--color-accent-blue-300) md:font-medium')}
            to="/favorites"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 md:hidden"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              />
            </svg>
            Favorites
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
