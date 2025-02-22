import React from 'react';

export default function Loader() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen" role="status" aria-live='polite'>
      <div className="relative w-16 h-16">
        <div
          className="absolute w-full h-full rounded-full border-4 border-t-transparent border-r-transparent animate-spin"
          style={{
            borderColor: 'var(--color-accent-blue-500)',
          }}
        ></div>
        <div
          className="absolute w-8 h-8 rounded-full border-4 border-t-transparent border-r-transparent animate-spin-reverse border-(--color-accent-blue-300) top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        ></div>
      </div>
      <h2
        className="mt-4 text-2xl text-(--color-neutral-lighter)"
        aria-label="Content is loading"
      >
        Loading...
      </h2>
    </div>
  );
}
