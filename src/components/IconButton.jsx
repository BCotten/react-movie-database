/* eslint-disable react/prop-types */
import React from "react";
import { WishlistIcon, HeartIcon } from "./Icons";
import { useEffect } from "react";
import { useContext } from "react";
import { MovieIdContext } from "./context/MovieIdContext";


export default function IconButton({ icon, id, className, fill, iconClassName }) {
  const context = useContext(MovieIdContext);
  const { handleAddToStorage, favorites, wishlist } = context;


  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);


  const IconComponent = icon === "wishlist" ? WishlistIcon : HeartIcon;


  return (
    <button className={`cursor-pointer ${className}`} onClick={() => handleAddToStorage(id, icon)}>
      <IconComponent className={iconClassName} fill={fill} />
    </button>
  );
}