/* eslint-disable react/prop-types */
import React, { useState } from 'react';

export default function Reviews({ details }) {
  // Select 3 random reviews
  const randomReviews = details
    ?.sort(() => 0.5 - Math.random()) // Shuffle the array
    .slice(0, 3); // Take the first 3 reviews

  // State to track the current review index
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  if (!randomReviews || randomReviews.length === 0) {
    return null; // Return nothing if no reviews are available
  }

  return (
    <section className="py-8 px-4 sm:px-18">
      <h2 className="text-2xl font-bold mb-6">Reviews</h2>

      {/* Review Container */}
      <div className="flex flex-col items-center justify-center min-h-[300px]">
        {/* Current Review */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-lg italic">"{randomReviews[currentReviewIndex]?.content}"</p>
          <p className="mt-4 font-semibold">
            - {randomReviews[currentReviewIndex]?.author}
          </p>
        </div>

        {/* Dots to Switch Reviews */}
        <div className="flex gap-2 mt-8">
          {randomReviews.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentReviewIndex(index)}
              className={`w-3 h-3 rounded-full ${
                index === currentReviewIndex ? 'bg-gray-700' : 'bg-gray-300'
              }`}
              aria-label={`Go to review ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}