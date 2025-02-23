import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { API_CONFIG } from '../../config/api';
import Loader from '../Loader';

export default function BrowseByGenre() {
  const [showAll, setShowAll] = useState(false);

  // Fetch the list of genres
  const { data: genresData } = useQuery({
    queryKey: ['genres'],
    queryFn: () => getGenres(),
  });

  // Fetch a movie for each genre
  const { data: moviesData } = useQuery({
    queryKey: ['moviesByGenre', genresData],
    queryFn: () => getMoviesByGenre(genresData?.genres),
    enabled: !!genresData,
  });

  if (!genresData || !moviesData) return <Loader />;

  const displayedGenres = showAll ? genresData.genres : genresData.genres.slice(0, 6);

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-[75px] max-w-full mx-auto">
      {/* Heading and Filter Options (Inline with "Now Playing" in PageHome.jsx) */}
      <div className="flex flex-row justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Browse By Genre</h2>
        {/* Optional: Add a filter or dropdown here if needed */}
      </div>

      {/* Centered Grid for Images and Labels */}
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16">
          {displayedGenres.map((genre, index) => (
            <div key={genre.id} className="flex flex-col items-center">
              {/* Image Container */}
              <div className="w-[461px] h-[297px] rounded-lg overflow-hidden relative mb-[5px]">
                <img
                  src={`${API_CONFIG.imagesUrl}w342/${moviesData[index]?.poster_path}`}
                  alt={moviesData[index]?.title}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Genre Label */}
              <div className="w-[461px] bg-[#0A1045] text-white text-center py-2 rounded-b-lg">
                <h3 className="text-lg font-semibold">{genre.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Show More Button */}
      {!showAll && (
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setShowAll(true)}
            className="px-6 py-2 bg-[#B9E5FB] text-black rounded hover:bg-[#9FD8F7] transition-colors duration-200"
          >
            Show More
          </button>
        </div>
      )}
    </div>
  );
}

const getGenres = async () => {
  const response = await fetch(`${API_CONFIG.baseUrl}/genre/movie/list?language=en-US`, {
    method: 'get',
    headers: {
      accept: 'application/json',
      Authorization: API_CONFIG.token,
    },
  });
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const getMoviesByGenre = async (genres) => {
  if (!genres) return [];

  const movies = await Promise.all(
    genres.map(async (genre) => {
      const response = await fetch(
        `${API_CONFIG.baseUrl}/discover/movie?with_genres=${genre.id}&sort_by=popularity.desc&page=1`,
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
      const data = await response.json();
      return data.results[0]; // Get the first movie from the list
    })
  );

  return movies;
};