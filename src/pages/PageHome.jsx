import React from 'react';
import MovieCard from '../components/MovieCard';
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import HomeHero from '../components/home/HomeHero';
import Recommended from '../components/home/Recommended';
import BrowseByGenre from '../components/home/BrowseByGenre';


const API_TOKEN = import.meta.env.VITE_TMDB_API_TOKEN;

export default function PageHome() {
  const [movieList, setMovieList] = useState(null);

  const { data } = useQuery({
    queryKey: [movieList],
    queryFn: () => getMovieData(movieList),
  });

  function handleMovieListsChange(e) {
    setMovieList(e.target.value);
  }





  return (
    <main className="text-(--color-neutral-light)">
      <section className='h-[75vh] '>
        <HomeHero details={data?.results[0]} />
      </section>
      <section>
        <h2>{movieList}</h2>
        <select onChange={handleMovieListsChange}>
          <option value="filter_options">Filter Options</option>
          <option value="now_playing">Now Playing</option>
          <option value="popular">Popular</option>
          <option value="top_rated">Top Rated</option>
          <option value="upcoming">Upcoming</option>
        </select>
        <ul className='grid gap-15 mx-18' style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(15.625rem, 1fr))' }}>
          {data?.results &&
            data.results.map((movieDetails) => (
              <MovieCard key={movieDetails.id} details={movieDetails} />
            ))}
        </ul>
      </section>
      <section>
        <Recommended details={data?.results[0].id} />
      </section>
      <section>
        <BrowseByGenre />
      </section>
    </main>
  );
}

const getMovieData = async (movieList) => {
  console.log(movieList);
  if (movieList === null || movieList === "filter_options") {
    movieList = 'now_playing';
  }

  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieList}?language=en-US&page=1`,
    {
      method: 'get',
      headers: {
        accept: 'application/json',
        Authorization: API_TOKEN,
      },
    }
  );
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};


