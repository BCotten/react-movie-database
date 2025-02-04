/* eslint-disable react/prop-types */
import React from 'react';

export default function HomeHero(props) {
  const { details } = props;
  return (
    <>
    { details && (
      <h1>{details.title}</h1>
      /* fill in rest here... */
    )}
  </>
  );
}
