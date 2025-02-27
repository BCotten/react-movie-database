import React from 'react';

export default function PageAbout() {
  return (
    <main className="text-(--color-neutral-light) flex flex-col items-center min-h-screen px-1">
      <section className="text-center max-w-3xl mt-50 sm:mt-50">
        <h1 className="text-2xl md:text-4xl font-bold mb-5">About MovieFix</h1>
        <p className="text-base md:text-lg leading-relaxed mb-3 max-w-[90%] sm:max-w-[700px] mx-auto">
          Welcome to MovieFix, your ultimate destination for all things movies!
          Whether you&apos;re searching for the latest blockbusters, timeless
          classics, or hidden gems, MovieFix has you covered. Explore detailed
          reviews, cast and crew insights, trailers, and personalized
          recommendations tailored to your taste.
        </p>
        <p className="text-base md:text-lg leading-relaxed mb-3 px-4 sm:px-6 md:px-8">
          Our mission is to help you discover your next favorite film, one fix
          at a time. Dive in, and let your cinematic journey begin!
        </p>

        <div className="pt-8 sm:pt-12 md:pt-16 px-4 sm:px-6 md:px-8">
          <img
            src="/tmdb.svg"
            alt="The Movie Database"
            className="w-full max-w-[90%] sm:max-w-[80%] md:max-w-[70%] h-auto mx-auto"
          />
          <p className="mt-4 text-sm sm:text-base">
            This project uses data from The Movie Database (TMDB) API but is not
            endorsed or certified by TMDB. For more information, visit{' '}
            <a
              href="https://www.themoviedb.org"
              className="text-blue-500 hover:underline"
            >
              themoviedb.org
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}
