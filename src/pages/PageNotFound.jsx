import React from "react";
import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <main className="flex flex-col justify-center items-center text-(--color-neutral-light) bg-(--color-neutral-dark) min-h-screen ">
      <h1 className="text-2xl font-title">Oops! Page Not Found: 404</h1>
      <p className="font-base">The page you are looking for does not exist or has been moved.</p>
      <Link className="text-(--color-accent-blue-500) underline text-xl font-base" to="/">Home</Link>
    </main>
  );
}