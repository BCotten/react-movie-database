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

  // Calculate the percentage of people who liked the movie
  const likePercentage = Math.round((details.vote_average / 10) * 100);

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
            <div className="relative">
              {/* Movie Image */}
              <img
                src={`https://image.tmdb.org/t/p/w342/${selectedPoster}`}
                alt={details.title}
                className="w-[320px] md:w-[480px] lg:w-[600px] h-auto mb-4 md:mb-0 md:mr-8 z-10"
              />

              {details.images?.posters?.length > 1 && (
                <div className="relative w-full">
                  {/* Left Arrow (Outside Carousel) */}
                  <button
                    onClick={() => scrollThumbnails('left')}
                    className="absolute -left-12 top-1/2 transform -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-transparent border-2 border-white rounded-full text-white hover:bg-white hover:text-black transition duration-200"
                    aria-label="Scroll left"
                  >
                    &larr;
                  </button>

                  {/* Thumbnails Container */}
                  <div
                    ref={thumbnailsRef}
                    className="flex space-x-[5px] overflow-x-auto scrollbar-hide w-full max-w-[240px] md:max-w-[320px] lg:max-w-[360px] mx-auto"
                  >
                    {details.images.posters.slice(0, 10).map((image, index) => (
                      <img
                        key={index}
                        src={`https://image.tmdb.org/t/p/w92/${image.file_path}`}
                        alt={`Thumbnail ${index}`}
                        className={`cursor-pointer w-20 h-auto rounded-md hover:opacity-80 transition ${
                          image.file_path === selectedPoster ? 'border-2 border-[#B9E5FB]' : ''
                        }`}
                        onClick={() => setSelectedPoster(image.file_path)}
                      />
                    ))}
                  </div>

                  {/* Right Arrow (Outside Carousel) */}
                  <button
                    onClick={() => scrollThumbnails('right')}
                    className="absolute -right-12 top-1/2 transform -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-transparent border-2 border-white rounded-full text-white hover:bg-white hover:text-black transition duration-200"
                    aria-label="Scroll right"
                  >
                    &rarr;
                  </button>
                </div>
              )}
            </div>

            <div className="text-white z-10 w-full md:w-auto ml-20">
              {/* Title and Buttons Container */}
              <div className="flex items-center justify-between mb-4">
                <h1 className="text-3xl md:text-4xl font-bold">{details.title}</h1>
                {/* Buttons Container */}
                <div className="flex space-x-4">
                  <IconButton
                    icon="wishlist"
                    id={details.id}
                    className="bg-(--color-primary-500) p-2 rounded-full hover:text-(--color-secondary-500) hover:bg-(--color-accent-blue-400) hover:rounded-full"
                    fill="none"
                    iconClassName="size-10"
                  />
                  <IconButton
                    icon="favorite"
                    id={details.id}
                    className="bg-(--color-primary-500) p-2 rounded-full hover:text-(--color-secondary-500) hover:bg-(--color-accent-blue-400) hover:rounded-full"
                    fill="none"
                    iconClassName="size-10"
                  />
                </div>
              </div>

              <p className="text-base md:text-lg mb-6">{details.overview}</p>

              {/* Like Percentage with Thumbs-Up Icon */}
              <div className="flex items-center space-x-2">
                {/* Thumbs-Up Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-[#B9E5FB]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                  />
                </svg>
                {/* Percentage Text */}
                <span className="text-lg font-semibold">{likePercentage}%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

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