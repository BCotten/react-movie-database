/* eslint-disable react/prop-types */
import React from 'react';

export default function Reviews(props) {
  const { details } = props;
  /* Array of object where each object is a review with information  */
  console.log(details);
  return (
    <>
      <h2>Reviews Here</h2>
    </>
  );
}
