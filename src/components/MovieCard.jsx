/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import changeDateFormat from '../utilities/changeDateFormat';
import changeRating from '../utilities/changeRating';
import changeMaxOverviewLength from '../utilities/changeMaxOverviewLength';
import Loader from './Loader';
import IconButton from './IconButton';
import { InfoIcon, ThumbUpIcon } from './Icons';

export default function MovieCard({ details }) {
  const id = `/movie/id${details?.id}`;

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
    <li className=" max-w-[250px] font-base text-(--color-accent-blue-400)">
      <div className="group relative">
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w342/${details.poster_path}`}
            alt={details.title}
          />
        </div>
        <div className="absolute inset-0 bg-(--color-secondary-500) opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col gap-2">
          <div className="flex flex-row gap-8 px-5 justify-center items-center">
            <ThumbUpIcon className="size-7" />
            <p className="font-title text-m">{rating} liked it</p>
          </div>
          <p>{overview}</p>
          <div className="flex flex-row align-self-end px-5 mt-auto">
            <IconButton
              icon="wishlist"
              id={details.id}
              className=""
              fill="none"
              iconClassName="size-9 hover:text-(--color-secondary-500) hover:bg-(--color-accent-blue-400) hover:rounded-full"
            />
            <Link to={id} className="justify-self-end ml-auto">
              <InfoIcon className="size-9 hover:text-(--color-secondary-500) hover:bg-(--color-accent-blue-400) hover:rounded-full" />
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-between items-center">
        <div>
          <p className="font-title text-(--color-neutral-light)">
            {details.title}
          </p>
          <p className="font-title text-(--color-neutral-light)">{date}</p>
        </div>
        <IconButton
          icon="heart"
          id={details.id}
          className=""
          fill="none"
          stroke="currentColor"
          iconClassName="size-9 hover:text-(--color-secondary-500) hover:bg-(--color-accent-blue-400) hover:rounded-full"
        />
      </div>
    </li>
  );
}
