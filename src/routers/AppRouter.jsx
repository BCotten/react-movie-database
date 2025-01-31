import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PageHome from '../pages/PageHome';
import PageAbout from '../pages/PageAbout';
import PageFavorites from '../pages/PageFavorites';
import PageMovieDetails from '../pages/PageMovieDetails';
import PageNotFound from '../pages/PageNotFound';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

/**
 * Main application router component that defines the navigation structure.
 * 
 * @description Sets up client-side routing for the movie application using React Router.
 * Defines routes for different pages and provides a consistent layout with navigation and footer.
 * 
 * @returns {JSX.Element} A browser router configuration with routes for home, about, favorites, 
 * movie details, and a fallback not found page.
 * 
 * @route {/} Renders the home page
 * @route {/about} Renders the about page
 * @route {/favorites} Renders the user's favorite movies page
 * @route {/movie/:id} Renders details for a specific movie
 * @route {*} Renders a not found page for undefined routes
 */
export default function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<PageHome />} />
        <Route path="/about" element={<PageAbout />} />
        <Route path="/favorites" element={<PageFavorites />} />
        <Route path="/movie/:id" element={<PageMovieDetails />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}


