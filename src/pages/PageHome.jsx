import React from 'react';
import MovieCard from '../components/MovieCard';
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import HomeHero from '../components/home/HomeHero';
import Recommended from '../components/home/Recommended';
import BrowseByGenre from '../components/home/BrowseByGenre';
import { API_CONFIG } from '../config/api';

export default function PageHome() {
  const [movieList, setMovieList] = useState('now_playing');
  const [sectionTitle, setSectionTitle] = useState('Now Playing');

  const { data } = useQuery({
    queryKey: [movieList],
    queryFn: () => getMovieData(movieList),
  });

  const handleMovieListsChange = (event) => {
    const selectedOption = event.target.options[event.target.selectedIndex];
    const selectedValue = event.target.value;

    if (selectedValue !== 'filter_options') {
      setSectionTitle(selectedOption.id);
      setMovieList(selectedValue);
    }
  };

  return (
    <main className="text-(--color-neutral-light)">
      <section className="h-screen ">
        <HomeHero details={data?.results[0]} />
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-[75px] max-w-full mx-auto">
        <div className="flex flex-row justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">{sectionTitle}</h2>
          <select
            onChange={handleMovieListsChange}
            className="bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          >
            <option value="filter_options" id="Filter Options">
              Filter Options
            </option>
            <option value="now_playing" id="Now Playing">
              Now Playing
            </option>
            <option value="popular" id="Popular">
              Popular
            </option>
            <option value="top_rated" id="Top Rated">
              Top Rated
            </option>
            <option value="upcoming" id="Upcoming">
              Upcoming
            </option>
          </select>
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 justify-items-center">
          {data?.results.slice(0, 12).map((movieDetails) => (
            <MovieCard key={movieDetails.id} details={movieDetails} />
          ))}
        </ul>
      </section>

      <section>
        <Recommended details={data?.results[0].id} />
      </section>
    </main>
  );
}

const getMovieData = async (movieList) => {
  console.log(movieList);
  if (movieList === null || movieList === 'filter_options') {
    movieList = 'now_playing';
  }

  const response = await fetch(
    `${API_CONFIG.baseUrl}/movie/${movieList}?language=en-US&page=1`,
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
