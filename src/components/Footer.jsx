import React from "react";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 p-6 text-white flex justify-between items-center relative">
      <section className="flex flex-col items-start space-y-3">
        <h1>
            <img src="../../src/assets/moviefix-logo.png" alt="moviefix" className="h-10" />
        </h1>
        <ul className="flex space-x-4">
          <li>
            <a href="https://facebook.com" target="_blank" aria-label="Facebook">
              <img src="../../src/assets/facebook-icon.svg" alt="Facebook" className="w-8 h-8" />
            </a>
          </li>
          <li>
            <a href="https://instagram.com" target="_blank" aria-label="Instagram">
              <img src="../../src/assets/instagram-icon.svg" alt="Instagram" className="w-8 h-8" />
            </a>
          </li>
          <li>
            <a href="https://youtube.com" target="_blank" aria-label="YouTube">
              <img src="../../src/assets/youtube-icon.svg" alt="YouTube" className="w-8 h-8" />
            </a>
          </li>
        </ul>
      </section>

      <section className="flex flex-col space-y-2">
        <ul className="space-y-2 text-right">
          <li><a href="#" className="hover:underline">Contact us</a></li>
          <li><a href="#" className="hover:underline">Careers</a></li>
          <li><a href="#" className="hover:underline">About</a></li>
        </ul>
      </section>
    </footer>
  );
}