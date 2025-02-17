/* eslint-disable react/prop-types */
import React from "react";
import { WishlistIcon, HeartIcon } from "./Icons";

export default function IconButton({ icon, onClick, className }) {
  const IconComponent = icon === "wishlist" ? WishlistIcon : HeartIcon;

  return (
    <button className={`p-2 rounded-full hover:bg-(--color-accent-blue-300) transition-colors ${className}`} onClick={onClick}>
      <IconComponent className="size-8" />
    </button>
  );
}