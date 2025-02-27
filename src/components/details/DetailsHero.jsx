/* eslint-disable react/prop-types */
import React, { useState, useContext, useEffect } from 'react';
import changeDateFormat from '../../utilities/changeDateFormat';
import changeRating from '../../utilities/changeRating';
import IconButton from '../IconButton';
import { MovieIdContext } from '../context/MovieIdContext';


export default function DetailsHero({ details }) {
  const context = useContext(MovieIdContext);
  const { favorites, wishlist } = context;
  if (!details) return null;

  const [isFavorite, setFillFavorites] = useState(false);
  const [isInWishlist, setFillWishlist] = useState(false);

  useEffect(() => {
      setFillFavorites(favorites.includes(details?.id));
    }, [favorites, details?.id]);

    useEffect(() => {
      setFillWishlist(wishlist.includes(details?.id));
    }, [wishlist, details?.id]);

  const [selectedPoster] = useState(details.poster_path);


  return (
    <div className="relative w-full">
      <div className="relative w-full h-[940px] md:h-[800px] lg:h-[940px]">
        <img
          src={`https://image.tmdb.org/t/p/original/${details.backdrop_path}`}
          alt={details.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#101338] opacity-75"></div>

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex flex-col lg:flex-row items-center lg:items-start max-w-6xl w-full p-4 pt-8 md:pt-16 md:pb-16">
            <div className="relative mb-6 lg:mb-0 lg:mr-8 lg:self-center">
              {/* Movie Image */}
              <img
                src={`https://image.tmdb.org/t/p/w342/${selectedPoster}`}
                alt={details.title}
                className="w-[320px] md:w-[342px] lg:w-[450px] h-auto z-10"
              />

              {details.images?.posters?.length > 1 && (
                <div className="relative w-full mt-4">
                  {/* Thumbnails section (keep as is) */}
                </div>
              )}
            </div>

            <div className="text-white z-10 w-full lg:w-1/2 lg:self-center mt-6 lg:mt-0">
              {/* Title and Buttons Container */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4">
                <h1 className="text-3xl md:text-4xl font-bold mb-4 sm:mb-0">
                  {details.title}
                </h1>
                {/* Buttons Container */}
                <div className="flex space-x-2 sm:space-x-4">
                  <IconButton
                    icon="wishlist"
                    id={details.id}
                    className="bg-(--color-primary-500) p-1 sm:p-2 rounded-full hover:text-(--color-secondary-500) hover:bg-(--color-accent-blue-400) hover:rounded-full"
                    fill={isInWishlist ? 'full' : 'none'}
                    iconClassName="size-6 sm:size-8"
                  />
                  <IconButton
                    icon="heart"
                    id={details.id}
                    className="bg-(--color-primary-500) p-1 sm:p-2 rounded-full hover:text-(--color-secondary-500) hover:bg-(--color-accent-blue-400) hover:rounded-full"
                    fill={isFavorite ? 'full' : 'none'}
                    iconClassName="size-6 sm:size-8"
                  />
                </div>
              </div>
              <p className="text-base md:text-lg">{details.overview}</p>
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
