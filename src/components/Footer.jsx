import React from "react";
import { NavLink } from 'react-router-dom';
import { InstagramIcon, FacebookIcon, YoutubeIcon } from "./Icons";

export default function Footer() {
  return (
    <footer className="bg-(--color-neutral-dark) font-base p-6 text-(--color-neutral-light) flex justify-between items-center relative">
      <section className="flex flex-col items-start space-y-3">
        <h1>
        <NavLink to="/" aria-label="Moviefix Home">
            <img src="../../src/assets/moviefix-logo.png" alt="moviefix" className="h-12" />
          </NavLink>
        </h1>
        <ul className="flex space-x-4">
          <li>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
              <FacebookIcon className="size-9"/>
            </a>
          </li>
          <li>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
              <InstagramIcon className="size-9"/>
            </a>
          </li>
          <li>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube">
              <YoutubeIcon className="size-9"/>
            </a>
          </li>
        </ul>
      </section>

      <section className="flex flex-col space-y-2">
        <ul className="space-y-2 text-right">
          <li><a href="#" className="hover:underline">Contact us</a></li>
          <li><a href="#" className="hover:underline">Careers</a></li>
          <li><NavLink to="/about" className="hover:underline">About</NavLink></li>
        </ul>
      </section>
    </footer>
  );
}