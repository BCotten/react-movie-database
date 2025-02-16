import React from "react";

export default function Loader() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
  <div className="relative w-16 h-16">
    <div
      className="absolute w-full h-full rounded-full border-4 border-t-transparent border-r-transparent animate-spin"
      style={{
        borderColor: "var(--color-accent-blue-500)",
      }}
    ></div>
    <div
      className="absolute w-8 h-8 rounded-full border-4 border-t-transparent border-r-transparent animate-spin-reverse"
      style={{
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        borderColor: "var(--color-accent-blue-300)",
      }}
    ></div>
  </div>
  <h2 className="mt-4 text-2xl" style={{ color: "var(--color-neutral-lighter)" }}>
    Loading...
  </h2>
</div>
  );
}
