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
      <div className="relative w-full h-[940px] md:h-[600px] lg:h-[940px]">
        <img
          src={`https://image.tmdb.org/t/p/original/${details.backdrop_path}`}
          alt={details.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#101338] opacity-75"></div>

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex flex-col md:flex-row items-center max-w-6xl w-full p-4">
            <div className="relative w-full md:w-auto md:px-4 lg:px-0">
              {/* Movie Image */}
              <img
                src={`https://image.tmdb.org/t/p/w342/${selectedPoster}`}
                alt={details.title}
                className="w-[320px] sm:w-[400px] md:w-[350px] lg:w-[450px] h-auto mb-4 md:mb-0 md:mr-8 z-10 mx-auto md:mx-0"
              />

              {details.images?.posters?.length > 1 && (
                <div className="relative w-full max-w-[320px] sm:max-w-[400px] md:max-w-[350px] lg:max-w-[450px] mx-auto md:mx-0 mt-4">
                  {/* Left Arrow (Outside Carousel) */}
                  <button
                    onClick={() => scrollThumbnails('left')}
                    className="absolute -left-8 top-1/2 transform -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-transparent border-2 border-white rounded-full text-white hover:bg-white hover:text-black transition duration-200"
                    aria-label="Scroll left"
                  >
                    &larr;
                  </button>

                  {/* Thumbnails Container */}
                  <div
                    ref={thumbnailsRef}
                    className="flex space-x-[5px] overflow-x-auto scrollbar-hide w-full max-w-[280px] sm:max-w-[360px] md:max-w-[310px] lg:max-w-[410px] mx-auto"
                  >
                    {details.images.posters.slice(0, 10).map((image, index) => (
                      <img
                        key={index}
                        src={`https://image.tmdb.org/t/p/w92/${image.file_path}`}
                        alt={`Thumbnail ${index}`}
                        className={`cursor-pointer w-16 h-auto rounded-md hover:opacity-80 transition ${
                          image.file_path === selectedPoster
                            ? 'border-2 border-[#B9E5FB]'
                            : ''
                        }`}
                        onClick={() => setSelectedPoster(image.file_path)}
                      />
                    ))}
                  </div>

                  {/* Right Arrow (Outside Carousel) */}
                  <button
                    onClick={() => scrollThumbnails('right')}
                    className="absolute -right-8 top-1/2 transform -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-transparent border-2 border-white rounded-full text-white hover:bg-white hover:text-black transition duration-200"
                    aria-label="Scroll right"
                  >
                    &rarr;
                  </button>
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
