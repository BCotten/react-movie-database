/* eslint-disable react/prop-types */
import React from 'react';
import changeDateFormat from '../../utilities/changeDateFormat';
import changeRating from '../../utilities/changeRating';
import IconButton from '../IconButton';

export default function DetailsHero({ details }) {
  if (!details) return null;

  return (
    <div className="relative w-full">
      {/* Backdrop Image with Overlay */}
      <div className="relative w-full h-[940px] md:h-[600px] lg:h-[940px]">
        <img
          src={`https://image.tmdb.org/t/p/original/${details.backdrop_path}`}
          alt={details.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#101338] opacity-75"></div>

        {/* Content Container - Centered */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex flex-col md:flex-row items-center max-w-6xl w-full p-4">
            <img
              src={`https://image.tmdb.org/t/p/w342/${details.poster_path}`}
              alt={details.title}
              className="w-[280px] md:w-[320px] lg:w-[360px] h-auto mb-4 md:mb-0 md:mr-8 z-10"
            />
            <div className="text-white z-10 w-full md:w-auto">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center md:text-left">
                {details.title}
              </h1>
              <p className="text-base md:text-lg mb-6">{details.overview}</p>
              <div className="flex justify-center md:justify-start space-x-4 mt-4 md:mt-0">
                <IconButton
                  icon="wishlist"
                  id={details.id}
                  className="bg-(--color-primary-500) p-2 rounded-full hover:text-(--color-secondary-500) hover:bg-(--color-accent-blue-400) hover:rounded-full"
                  fill="none"
                  iconClassName="size-10"
                />
                <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap mb-2">
                  Add to Watch List
                </span>
                <IconButton
                  icon="favorite"
                  id={details.id}
                  className="bg-(--color-primary-500) p-2 rounded-full hover:text-(--color-secondary-500) hover:bg-(--color-accent-blue-400) hover:rounded-full"
                  fill="none"
                  iconClassName="size-10"
                />
                <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap mb-2">
                  Add to Favorites
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Details Bar */}
      <div className="flex flex-col md:flex-row justify-between items-center bg-[#B9E5FB] text-[#101338] py-4 md:h-[140px] px-4 md:px-8">
        <div className="flex flex-col items-center mb-4 md:mb-0">
          <span className="font-semibold text-lg">Release Date:</span>
          <span>{changeDateFormat(details.release_date)}</span>
        </div>
        <div className="hidden md:block h-full w-px bg-[#101338] transform rotate-12"></div>
        <div className="w-full md:w-auto h-px md:h-auto bg-[#101338] md:hidden mb-4"></div>
        <div className="flex flex-col items-center mb-4 md:mb-0">
          <span className="font-semibold text-lg">Run Time:</span>
          <span>{details.runtime} minutes</span>
        </div>
        <div className="hidden md:block h-full w-px bg-[#101338] transform rotate-12"></div>
        <div className="w-full md:w-auto h-px md:h-auto bg-[#101338] md:hidden mb-4"></div>
        <div className="flex flex-col items-center mb-4 md:mb-0">
          <span className="font-semibold text-lg">Genres:</span>
          <span>{details.genres.map((genre) => genre.name).join(', ')}</span>
        </div>
        <div className="hidden md:block h-full w-px bg-[#101338] transform rotate-12"></div>
        <div className="w-full md:w-auto h-px md:h-auto bg-[#101338] md:hidden mb-4"></div>
        <div className="flex flex-col items-center">
          <span className="font-semibold text-lg">Rating Average:</span>
          <span>{changeRating(details.vote_average.toFixed(1))}</span>
        </div>
      </div>
    </div>
  );
}
