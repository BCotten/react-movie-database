/* eslint-disable react/prop-types */
import React from 'react';

export default function Trailers({ details }) {
  // Find the first trailer in the details array
  const trailer = details?.find((video) => video.type === 'Trailer');

  if (!trailer) {
    return null; // Return nothing if no trailer is found
  }

  return (
    <section className="py-8 px-4 sm:px-18">
      {/* "Trailer" Heading (Left-Aligned) */}
      <h2 className="text-2xl font-bold mb-6">Trailer</h2>

      {/* Centered Video Container */}
      <div className="flex justify-center">
        {/* Embed YouTube Video */}
        <div className="w-full max-w-[33%] aspect-video">
          <iframe
            src={`https://www.youtube.com/embed/${trailer.key}`}
            title={trailer.name}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}