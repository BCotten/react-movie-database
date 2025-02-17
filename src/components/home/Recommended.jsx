/* eslint-disable react/prop-types */
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { API_CONFIG } from '../../config/api';
import Loader from '../Loader';

/* This gets the first Movie id in which ever current category is being used
e.i now playing popular etc and populates a list of recommended based on that movie*/

export default function Recommended({details}) {
  const id = details?.toString();

  const { data } = useQuery({
    queryKey: [id],
    queryFn: () => getSingleMovieData(id),
  });

  if (!data) return <Loader />;

  console.log(details);
  console.log(data);

  /* data.recommendations.results has the recommended movies for this id */
  return (
    <>
      <h2>Recommended</h2>
      <p>{data?.recommendations?.results[0].title}</p>
      <p>{data?.recommendations?.results[0].overview}</p>
      <p>{data?.recommendations?.results[0].release_date}</p>
      <p>{data?.recommendations?.results[0].runtime}</p>
      <img
        src={`${API_CONFIG.imagesUrl}w342/${data?.recommendations?.results[0].backdrop_path}`}
        alt={data?.recommendations?.results[0].title}
      />
      <img
        src={`${API_CONFIG.imagesUrl}w342/${data?.recommendations?.results[0].poster_path}`}
        alt={data?.recommendations?.results[0].title}
      />
    </>
  );
}

const getSingleMovieData = async (movieID) => {
  console.log(movieID);

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
