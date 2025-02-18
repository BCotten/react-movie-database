/* eslint-disable react/prop-types */
import { createContext, useState } from 'react';
import React from 'react';

const MovieIdContext = createContext();

const MovieIdProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  function handleAddToStorage(id, icon) {
    console.log({ id });
    console.log({favorites});
    if (icon === 'wishlist') {
      const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
      if (!wishlist.includes(id)) {
        setWishlist([...wishlist, id]);
      } else {
        const updatedWishlist = wishlist.filter((wishlistId) => wishlistId !== id);
        setWishlist(updatedWishlist);
      }
    } else if (icon === 'heart') {
      const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
      if (!favorites.includes(id)) {
        setFavorites([...favorites, id]);
      } else {
        const updatedFavorites = favorites.filter((favoriteId) => favoriteId !== id);
        setFavorites(updatedFavorites);
      }
    }
  }

  const value = {
    favorites: favorites,
    setFavorites: setFavorites,
    wishlist: wishlist,
    setWishlist: setWishlist,
    handleAddToStorage: handleAddToStorage,
  };

  return (
    <MovieIdContext.Provider value={value}>
      {children}
    </MovieIdContext.Provider>
  );
};

export { MovieIdContext, MovieIdProvider };
