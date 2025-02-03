import React from 'react';
import { useLocation } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import DetailsHero from '../components/details/DetailsHero';
import Cast from '../components/details/Cast';
import Trailers from '../components/details/Trailers';
import Reviews from '../components/details/Reviews';
const API_TOKEN = import.meta.env.VITE_TMDB_API_TOKEN;

export default function PageMovieDetails() {
  const url = useLocation(); // current url
  const id = url.pathname.slice(9); // current url id

  const { data } = useQuery({
    queryKey: [id],
    queryFn: () => getSingleMovieData(id),
  });

  console.log(data);

  return (
    <main>
      <section>
        <DetailsHero />
      </section>
      <section>
        <Cast />
      </section>
      <section>
        <Trailers />
      </section>
      <section>
        <Reviews />
      </section>
      {data && (
        <>
          <img
            src={`https://image.tmdb.org/t/p/w342/${data.backdrop_path}`}
            alt={data.title}
          />
          <img
            src={`https://image.tmdb.org/t/p/w342/${data.poster_path}`}
            alt={data.title}
          />
          <h1>{data.title}</h1>
          <p>{data.overview}</p>
          <p>Release Date: {data.release_date}</p>
          <p>Rating: {data.vote_average}</p>
          <p>Runtime: {data.runtime} minutes</p>
          <p>
            Genres:{' '}
            {data.genres && data.genres.map((genre) => genre.name).join(', ')}
          </p>
        </>
      )}
    </main>
  );
}

const getSingleMovieData = async (movieID) => {
  console.log(movieID);

  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieID}?append_to_response=videos,images,credits,reviews,language=en-US`,
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
