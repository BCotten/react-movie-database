import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import MovieCardFav from '../components/MovieCardFav';
import { MovieIdContext } from '../components/context/MovieIdContext';
import { useContext } from 'react';

export default function PageMovieDetails() {
  const context = useContext(MovieIdContext);
  const { favorites, wishlist } = context;

  const [favoriteMoviesList, setFavoriteMoviesList] = useState([]);
  const [wishlistMoviesList, setWishlistMoviesList] = useState([]);

  const updateListsFromStorage = () => {
    const favorites = localStorage.getItem('favorites')
      ? JSON.parse(localStorage.getItem('favorites'))
      : [];
    const wishlist = localStorage.getItem('wishlist')
      ? JSON.parse(localStorage.getItem('wishlist'))
      : [];
    setFavoriteMoviesList(favorites);
    setWishlistMoviesList(wishlist);
  };

  useEffect(() => {
    updateListsFromStorage();
  }, [favorites, wishlist]);

  return (
    <main className="text-(--color-neutral-light) flex flex-col items-center min-h-screen px-1">
      {favoriteMoviesList.length === 0 && wishlistMoviesList.length === 0 && (
        <section className="text-center max-w-3xl mt-50 sm:mt-50">
          <h1 className="text-2xl md:text-4xl font-bold mb-4">
            Oops! You haven&apos;t selected any favorites yet!
          </h1>
          <p className="text-base md:text-lg mb-2">
            Browse or search for movies in the MovieFix Catalogue and start
            building your lists!
          </p>
          <br />
          <p className="text-base md:text-lg mb-1">
            To add movies to your favorites list, tap on the heart icon.
            <button className="cursor-pointer ml-2 mb-1 align-bottom">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6 hover:text-(--color-secondary-500) hover:bg-(--color-accent-blue-400) hover:rounded-full"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                ></path>
              </svg>
            </button>
          </p>
          <p className="text-base md:text-lg">
            To add movies to your watch list, tap on the star icon.
            <button className="cursor-pointer ml-2 mb-1 align-bottom">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6 hover:text-(--color-secondary-500) hover:bg-(--color-accent-blue-400) hover:rounded-full"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                ></path>
              </svg>
            </button>
          </p>
          <NavLink
            to="/"
            aria-label="Moviefix Home"
            onClick={() => {
              const scrollAmount =
                window.innerWidth < 768
                  ? window.innerHeight
                  : window.innerHeight * 1.1;
              setTimeout(
                () =>
                  window.scrollTo({ top: scrollAmount, behavior: 'smooth' }),
                100
              );
            }}
          >
            <button className="px-6 mt-5 py-2 bg-[#B9E5FB] text-black rounded hover:bg-[#9FD8F7] transition-colors duration-200">
              Start Browsing
            </button>
          </NavLink>
        </section>
      )}

      {favoriteMoviesList.length > 0 && (
        <section className="Favorites mx-4 mt-5">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 mt-10">
            Your Favorite Movies
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {favoriteMoviesList.map((movieDetails) => (
              <li key={movieDetails.id} className="flex justify-center">
                <div className="w-full max-w-[250px] aspect-[2/3]">
                  <MovieCardFav
                    movieDetails={movieDetails}
                    className="w-full h-full object-cover"
                  />
                </div>
              </li>
            ))}
          </ul>
        </section>
      )}

      {wishlistMoviesList.length > 0 && (
        <section className="WatchList mb-10 mx-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 mt-10">
            Your Watch List
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {wishlistMoviesList.map((movieDetails) => (
              <li key={movieDetails.id} className="flex justify-center">
                <div className="w-full max-w-[250px] aspect-[2/3]">
                  <MovieCardFav
                    movieDetails={movieDetails}
                    className="w-full h-full object-cover"
                  />
                </div>
              </li>
            ))}
          </ul>
        </section>
      )}
    </main>
  );
}
