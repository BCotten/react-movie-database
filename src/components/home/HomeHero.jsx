/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import changeDateFormat from '../../utilities/changeDateFormat';
import changeRating from '../../utilities/changeRating';
import Loader from '../Loader';
import { API_CONFIG } from '../../config/api';
import IconButton from '../IconButton';
import { MovieIdContext } from '../context/MovieIdContext';
import { useContext, useEffect, useState } from 'react';

export default function HomeHero({ details }) {
  const context = useContext(MovieIdContext);
  const { favorites, wishlist } = context;
  const id = `/movie/id${details?.id}`;

  const [isFavorite, setFillFavorites] = useState(false);
  const [isInWishlist, setFillWishlist] = useState(false);

  useEffect(() => {
    setFillFavorites(favorites.includes(details?.id));
  }, [favorites, details?.id]);

  useEffect(() => {
    setFillWishlist(wishlist.includes(details?.id));
  }, [wishlist, details?.id]);

  const date = changeDateFormat(details?.release_date);
  const rating = changeRating(details?.vote_average);

  const handleImageError = (e, fallbackSrc) => {
    e.target.src = fallbackSrc;
    e.target.onerror = null;
  };

  if (!details) return <Loader />;

  return (
    <div className="relative h-screen overflow-hidden">
      <img
        className="absolute inset-0 w-full h-full object-cover"
        src={`${API_CONFIG.imagesUrl}/original/${details.backdrop_path}`}
        alt={`Backdrop for ${details.title}`}
        onError={(e) => handleImageError(e, '/fallback-backdrop.jpg')}
        role="presentation"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#101338] to-transparent">
        <div className="container mx-auto h-full flex items-end md:items-center pb-24 md:pb-0 px-4">
          <div className="w-full max-w-xl">
            <div className="font-base flex flex-col gap-3 p-5 bg-(--color-accent-blue-300)/10 bg-clip-padding backdrop-filter backdrop-blur-sm backdrop-saturate-100 backdrop-contrast-100 rounded-md">
              <h1 className="font-title text-2xl md:text-4xl text-(--color-neutral-lighter)">
                {details.title}
              </h1>
              <p className="text-sm md:text-base">
                {date} | {rating} of Viewers Liked It
              </p>
              <p className="text-base md:text-lg">{details.overview}</p>
            </div>
            <div className="flex items-center gap-4 md:gap-10 mt-4 md:mt-10">
              <Link
                className="font-base text-base md:text-2xl bg-(--color-primary-500) px-6 md:px-12 py-2 rounded-lg outline-solid outline-(--color-accent-blue-300) hover:bg-(--color-primary-600)"
                to={id}
              >
                More Details
              </Link>
              <IconButton
                icon="wishlist"
                id={details.id}
                className="bg-(--color-primary-500) p-2 rounded-full hover:text-(--color-secondary-500) hover:bg-(--color-accent-blue-400) hover:rounded-full"
                fill={isInWishlist ? 'full' : 'none'}
                iconClassName="size-10"
              />
              <IconButton
                icon="heart"
                id={details.id}
                className="bg-(--color-primary-500) p-2 rounded-full hover:text-(--color-secondary-500) hover:bg-(--color-accent-blue-400) hover:rounded-full"
                fill={isFavorite ? 'full' : 'none'}
                iconClassName="size-10"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
