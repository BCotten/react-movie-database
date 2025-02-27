import React from 'react';
import { useLocation } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import DetailsHero from '../components/details/DetailsHero';
import Cast from '../components/details/Cast';
import Trailers from '../components/details/Trailers';
import Reviews from '../components/details/Reviews';
import { API_CONFIG } from '../config/api';

export default function PageMovieDetails() {
  const url = useLocation(); // current url
  const id = url.pathname.slice(9); // current url id

  const { data } = useQuery({
    queryKey: [id],
    queryFn: () => getSingleMovieData(id),
  });

  return (
    <main className="text-(--color-neutral-light)">
      <section>
        <DetailsHero details={data} />
      </section>
      <section>
        {/* data.credits.cast */}
        <Cast details={data?.credits?.cast} />
      </section>
      <section>
        {/* data.videos.results */}
        <Trailers details={data?.videos?.results} />
      </section>
      <section>
        {/* data.reviews.results */}
        <Reviews details={data?.reviews?.results} />
      </section>
    </main>
  );
}

const getSingleMovieData = async (movieID) => {
  const response = await fetch(
    `${API_CONFIG.baseUrl}/movie/${movieID}?append_to_response=videos,images,credits,reviews,language=en-US`,
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
