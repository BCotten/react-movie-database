/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";

export default function MovieCard(props) {
  const {details} = props;
  const id = `/movie/id${details?.id}`
  console.log(details);

  return (
    <li>
      <img src={`https://image.tmdb.org/t/p/w342/${details.poster_path}`} alt={details.title} />
      <p>{details.title}</p>
      <p>{details.release_date}</p>
      <p>{details.overview}</p>
      <Link to={id}>More Details</Link>
    </li>
  );
}