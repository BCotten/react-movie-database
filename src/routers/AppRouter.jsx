import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PageHome from '../pages/PageHome';
import PageAbout from '../pages/PageAbout';
import PageFavorites from '../pages/PageFavorites';
import PageMovieDetails from '../pages/PageMovieDetails';
import PageNotFound from '../pages/PageNotFound';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

export default function App() {
  return (
    <BrowserRouter basename="/movie-database">
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
