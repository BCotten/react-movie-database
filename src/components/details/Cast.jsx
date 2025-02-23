
import React, { useRef } from 'react';

export default function Cast({ details }) {
  const castContainerRef = useRef(null);

  // Function to scroll the cast container left
  const scrollLeft = () => {
    if (castContainerRef.current) {
      castContainerRef.current.scrollBy({
        left: -200, // Adjust scroll distance as needed
        behavior: 'smooth',
      });
    }
  };

  // Function to scroll the cast container right
  const scrollRight = () => {
    if (castContainerRef.current) {
      castContainerRef.current.scrollBy({
        left: 200, // Adjust scroll distance as needed
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="relative py-8 px-4 sm:px-18">
      <div className="flex justify-between items-center mb-6">
        {/* "Cast" Heading (Left-Aligned) */}
        <h2 className="text-2xl font-bold">Cast</h2>
        {/* Arrow Buttons (Top Right) */}
        <div className="flex gap-2">
          {/* Left Arrow Button */}
          <button
            onClick={scrollLeft}
            className="w-10 h-10 flex items-center justify-center bg-transparent border-2 border-white rounded-full text-white hover:bg-white hover:text-black transition-colors duration-200"
            aria-label="Scroll left"
          >
            &larr;
          </button>
          {/* Right Arrow Button */}
          <button
            onClick={scrollRight}
            className="w-10 h-10 flex items-center justify-center bg-transparent border-2 border-white rounded-full text-white hover:bg-white hover:text-black transition-colors duration-200"
            aria-label="Scroll right"
          >
            &rarr;
          </button>
        </div>
      </div>

      {/* Cast Members Container */}
      <div
        ref={castContainerRef}
        className="flex overflow-x-auto gap-6 scrollbar-hide justify-center" // Center and space evenly
      >
        {details?.map((castMember) => (
          <div key={castMember.id} className="flex-shrink-0 w-24 text-center">
            {/* Circular Cast Image */}
            <img
              src={`https://image.tmdb.org/t/p/w200${castMember.profile_path}`}
              alt={castMember.name}
              className="w-24 h-24 rounded-full object-cover mx-auto"
            />
            {/* Cast Name */}
            <p className="mt-2 text-sm font-semibold">{castMember.name}</p>
            {/* Cast Character */}
            <p className="text-xs text-gray-500">{castMember.character}</p>
          </div>
        ))}
      </div>
    </section>
  );
}