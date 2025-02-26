/* eslint-disable react/prop-types */
import React, { useState, useRef } from 'react';
import changeDateFormat from '../../utilities/changeDateFormat';
import changeRating from '../../utilities/changeRating';
import IconButton from '../IconButton';

export default function DetailsHero({ details }) {
  if (!details) return null;

  const [selectedPoster, setSelectedPoster] = useState(details.poster_path);
  const thumbnailsRef = useRef(null);

  const scrollThumbnails = (direction) => {
    if (thumbnailsRef.current) {
      const scrollAmount = 100;
      thumbnailsRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

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
          <div className="flex flex-col lg:flex-row items-center lg:items-start max-w-6xl w-full p-4 pt-8 md:pt-4">
            <div className="relative mb-6 lg:mb-0 lg:mr-8 lg:self-center">
              {/* Movie Image */}
              <img
                src={`https://image.tmdb.org/t/p/w342/${selectedPoster}`}
                alt={details.title}
                className="w-[320px] md:w-[400px] lg:w-[450px] h-auto z-10"
              />

              {details.images?.posters?.length > 1 && (
                <div className="relative w-full mt-4">
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
                    className="flex space-x-[5px] overflow-x-auto scrollbar-hide w-full max-w-[280px] md:max-w-[360px] lg:max-w-[420px] mx-auto"
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

            <div className="text-white z-10 w-full lg:w-1/2 lg:self-center">
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
                    fill="none"
                    iconClassName="size-6 sm:size-8"
                  />
                  <IconButton
                    icon="favorite"
                    id={details.id}
                    className="bg-(--color-primary-500) p-1 sm:p-2 rounded-full hover:text-(--color-secondary-500) hover:bg-(--color-accent-blue-400) hover:rounded-full"
                    fill="none"
                    iconClassName="size-6 sm:size-8"
                  />
                </div>
              </div>

              <p className="text-base md:text-lg">{details.overview}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
