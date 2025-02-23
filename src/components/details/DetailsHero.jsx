import React from 'react';

export default function DetailsHero({ details }) {
  if (!details) return null;

  return (
    <div className="relative w-full">
      {/* Backdrop Image with Overlay */}
      <div className="relative w-full h-[940px]">
        <img
          src={`https://image.tmdb.org/t/p/original/${details.backdrop_path}`}
          alt={details.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#101338] opacity-75"></div>

        {/* Content Container - Centered */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex items-center max-w-6xl w-full p-4">
            <img
              src={`https://image.tmdb.org/t/p/w342/${details.poster_path}`}
              alt={details.title}
              className="w-[360px] h-auto mr-8 z-10" // Updated width to 360px
            />
            <div className="text-white z-10">
              <h1 className="text-4xl font-bold mb-4">{details.title}</h1>
              <p className="text-lg">{details.overview}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Details Bar */}
      <div className="flex justify-between items-center bg-[#B9E5FB] text-[#101338] h-[140px] px-8">
        <div className="flex flex-col items-center">
          <span className="font-semibold text-lg">Release Date</span>
          <span>{details.release_date}</span>
        </div>
        <div className="h-full w-px bg-[#101338] transform rotate-12"></div>
        <div className="flex flex-col items-center">
          <span className="font-semibold text-lg">Run Time</span>
          <span>{details.runtime} minutes</span>
        </div>
        <div className="h-full w-px bg-[#101338] transform rotate-12"></div>
        <div className="flex flex-col items-center">
          <span className="font-semibold text-lg">Genres</span>
          <span>{details.genres.map((genre) => genre.name).join(', ')}</span>
        </div>
        <div className="h-full w-px bg-[#101338] transform rotate-12"></div>
        <div className="flex flex-col items-center">
          <span className="font-semibold text-lg">Rating Average</span>
          <span>{details.vote_average.toFixed(1)}</span>
        </div>
      </div>
    </div>
  );
}
