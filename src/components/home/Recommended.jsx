/* eslint-disable react/prop-types */
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { API_CONFIG } from '../../config/api';
import Loader from '../Loader';
import { Link } from 'react-router-dom';
import changeDateFormat from '../../utilities/changeDateFormat';
import changeRating from '../../utilities/changeRating';

/* This gets the first Movie id in which ever current category is being used
e.i now playing popular etc and populates a list of recommended based on that movie*/

export default function Recommended({ details }) {
  const id = details?.toString();

  const { data, isLoading } = useQuery({
    queryKey: [id],
    queryFn: () => getSingleMovieData(id),
  });

  if (isLoading) return <Loader />;

  // Get a random recommended movie
  const recommendedMovie =
    data?.recommendations?.results[
      Math.floor(Math.random() * data?.recommendations?.results.length)
    ];

  if (!recommendedMovie) return null;

  const movieId = `/movie/id${recommendedMovie.id}`;

  return (
    <section className="relative w-full h-auto min-h-[850px] md:h-[850px]">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${API_CONFIG.imagesUrl}original/${recommendedMovie.backdrop_path})`,
        }}
      >
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-[#273356]/75"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex items-center justify-center h-full px-4 md:px-8 py-8 md:py-0">
        <div className="flex flex-col md:flex-row max-w-6xl w-full items-center">
          {/* Poster Image */}
          <img
            src={`${API_CONFIG.imagesUrl}w342/${recommendedMovie.poster_path}`}
            alt={recommendedMovie.title}
            className="w-full md:w-1/3 object-cover rounded-lg shadow-lg mb-6 md:mb-0"
          />

          {/* Movie Details */}
          <div className="w-full md:w-2/3 md:ml-8 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-10 font-title">
              Recommended Movie:
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-4 font-title">
              {recommendedMovie.title}
            </h3>
            <p className="text-base md:text-lg mb-4 font-base">
              {recommendedMovie.overview}
            </p>
            <p className="text-sm mb-2 font-base">
              <span className="font-semibold">Release Date:</span>{' '}
              {changeDateFormat(recommendedMovie.release_date)}
            </p>
            <p className="text-sm mb-2 font-base">
              <span className="font-semibold">Rating:</span>{' '}
              {changeRating(recommendedMovie.vote_average)} of viewers liked it
            </p>
            <Link
              to={movieId}
              className="font-base text-2xl bg-(--color-primary-500) px-12 py-2 rounded-lg outline-solid outline-(--color-accent-blue-300) hover:bg-(--color-primary-600) mt-6 inline-block"
            >
              More Info
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

const getSingleMovieData = async (movieID) => {

  const response = await fetch(
    `${API_CONFIG.baseUrl}/movie/${movieID}?append_to_response=images,recommendations,language=en-US`,
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
