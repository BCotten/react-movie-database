/* eslint-disable react/prop-types */
import React from 'react';

export default function Cast(props) {
  const {details} = props;
  /* in details is a array of object each object being one cast member */
  console.log(details)
  return (
    <>
      <h2>Cast</h2>
    </>
  );
}
