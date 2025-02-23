import React from "react";

export default function PageAbout() {
  return (
    <main className="text-(--color-neutral-light) flex flex-col items-center min-h-screen px-1">
      <section className="text-center max-w-3xl mt-50 sm:mt-50">
        <h1 className="text-2xl md:text-4xl font-bold mb-5">About MovieFix</h1>
        <p className="text-base md:text-lg leading-relaxed mb-3 max-w-[90%] sm:max-w-[700px] mx-auto">
          Welcome to MovieFix, your ultimate destination for all things movies! Whether you're searching for the latest blockbusters, timeless classics, or hidden gems, MovieFix has you covered. Explore detailed reviews, cast and crew insights, trailers, and personalized recommendations tailored to your taste.
        </p>
        <p className="text-base md:text-lg leading-relaxed mb-3" >
          Our mission is to help you discover your next favorite film, one fix at a time. Dive in, and let your cinematic journey begin!
        </p>
      </section>
    </main>
  );
}
