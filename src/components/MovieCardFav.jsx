/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import changeDateFormat from '../utilities/changeDateFormat';
import changeRating from '../utilities/changeRating';
import changeMaxOverviewLength from '../utilities/changeMaxOverviewLength';
import Loader from './Loader';
import IconButton from './IconButton';
import { InfoIcon, ThumbUpIcon } from './Icons';
import { MovieIdContext } from './context/MovieIdContext';
import { useContext, useEffect, useState } from 'react';
import { API_CONFIG } from '../config/api';
import { useQuery } from '@tanstack/react-query';

export default function MovieCardFav({ movieDetails }) {
  console.log(movieDetails);
  const movieId = movieDetails;

  const { data } = useQuery({
    queryKey: [movieId],
    queryFn: () => getSingleMovieData(movieId),
  });

  const details = data;
  const context = useContext(MovieIdContext);
  const { favorites, wishlist } = context;
  const id = `/movie/id${details?.id}`;



  const [isFavorite, setFillFavorites] = useState(false);
  const [isInWishlist, setFillWishlist] = useState(false);

  useEffect(() => {
    setFillFavorites(favorites.includes(details?.id));
  }, [favorites, details?.id]);

  useEffect(() => {
    setFillWishlist(wishlist.includes(details?.id));
  }, [wishlist, details?.id]);

  const date = details?.release_date
    ? changeDateFormat(details.release_date)
    : 'Release date unavailable';
  const rating = details?.vote_average
    ? changeRating(details.vote_average)
    : 'Rating unavailable';
  const overview = details?.overview
    ? changeMaxOverviewLength(details.overview)
    : 'No overview available';

  if (!details) return <Loader />;

  return (
    <li className="max-w-[250px] sm:max-w-[200px] md:max-w-[220px] lg:max-w-[250px] font-base text-(--color-accent-blue-400)">
      <div className="group relative">
        <Link to={id} className="block">
          <img
            src={`https://image.tmdb.org/t/p/w342/${details.poster_path}`}
            alt={details.title}
            className="w-full h-full object-cover"
          />
        </Link>
        <div className="absolute inset-0 bg-(--color-secondary-500) opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-2 sm:p-3 md:p-4  flex-col gap-1 sm:gap-2 hidden lg:flex">
          <div className="flex flex-row items-center justify-center space-x-2 sm:space-x-3 md:space-x-4">
            <ThumbUpIcon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
            <p className="font-title text-xs sm:text-sm md:text-base lg:text-lg whitespace-nowrap">
              {rating} liked it
            </p>
          </div>

          <p className="text-xs sm:text-sm md:text-base overflow-y-auto max-h-[60%] mt-2">
            {overview}
          </p>
          <div className="flex flex-row align-self-end px-2 sm:px-3 md:px-4 lg:px-5 mt-auto">
            <IconButton
              icon="wishlist"
              id={details.id}
              className=""
              fill={isInWishlist ? 'full' : 'none'}
              iconClassName="size-6 sm:size-7 md:size-8 lg:size-9 hover:text-(--color-secondary-500) hover:bg-(--color-accent-blue-400) hover:rounded-full"
            />
            <Link to={id} className="justify-self-end ml-auto">
              <InfoIcon className="size-6 sm:size-7 md:size-8 lg:size-9 hover:text-(--color-secondary-500) hover:bg-(--color-accent-blue-400) hover:rounded-full" />
            </Link>
          </div>
        </div>
      </div>
      <div className="flex text-accent-blue-200 flex-row justify-between items-center mt-2">
        <div>
          <p className="font-title text-(--color-neutral-light) text-sm sm:text-base">
            {details.title}
          </p>
          <p className="font-title text-(--color-neutral-light) text-xs sm:text-sm">
            {date}
          </p>
        </div>
        <IconButton
          icon="heart"
          id={details.id}
          className=""
          fill={isFavorite ? 'full' : 'none'}
          stroke="currentColor"
          iconClassName="size-6 sm:size-7 md:size-8 lg:size-9 text-(--color-accent-blue-400) hover:text-(--color-secondary-500) hover:bg-(--color-accent-blue-400) hover:rounded-full"
        />
      </div>
    </li>
  );
}

const getSingleMovieData = async (movieID) => {
  console.log(movieID);

  const response = await fetch(
    `${API_CONFIG.baseUrl}/movie/${movieID}?append_to_response=videos,images,credits,reviews,language=en-US`,
    {
      method: 'get',
      headers: {
        accept: 'application/json',
        Authorization: API_CONFIG.token,
      },
    }
  );
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

