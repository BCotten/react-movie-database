/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import changeDateFormat from '../../utilities/changeDateFormat';
import changeRating from '../../utilities/changeRating';
import Loader from '../Loader';
import { API_CONFIG } from '../../config/api';
import { HeartIcon, WishlistIcon, ChevronDoubleRightIcon } from '../Icons';

export default function HomeHero(props) {
  const { details } = props;
  const id = `/movie/id${details?.id}`;

  console.log({ details });

  const date = changeDateFormat(details?.release_date);
  const rating = changeRating(details?.vote_average);

  const handleImageError = (e, fallbackSrc) => {
    e.target.src = fallbackSrc;
    e.target.onerror = null; // Prevent infinite loop
  };

  if (!details) return <Loader />;

  return (
    <>
      {details && (
        <>
          <div className="md:hidden flex flex-row justify-start items-center gap-4 bg-(--color-primary-500) w-max p-3 mt-12 rounded-r-2xl font-base">
            <h1 className=" text-xl text-(--color-neutral-lighter) font-title">
              {details.title}
            </h1>
            <ChevronDoubleRightIcon />
          </div>
          <img
            className="hidden xl:block absolute object-contain top-0 left-0 z-[-1] w-full max-h-full"
            src={`${API_CONFIG.imagesUrl}/original/${details.backdrop_path}`}
            alt={`Backdrop for ${details.title}`}
            onError={(e) => handleImageError(e, '/fallback-backdrop.jpg')}
            role="presentation"
            loading="lazy"
          />
          <img
            className="xl:hidden max-h-full w-full absolute top-0 left-0 z-[-1]"
            src={`${API_CONFIG.imagesUrl}/w500/${details.poster_path}`}
            alt={`Poster for ${details.title}`}
            onError={(e) => handleImageError(e, '/fallback-poster.jpg')}
            role="presentation"
            loading="lazy"
          />
          <div className="hidden md:block m-10 max-w-xl">
            <div className="font-base flex flex-col gap-3 p-5 bg-(--color-accent-blue-300)/10 bg-clip-padding backdrop-filter backdrop-blur-sm backdrop-saturate-100 backdrop-contrast-100 rounded-md border border-(--color-accent-blue-300)">
              <h1 className="font-title text-4xl text-(--color-neutral-lighter)">
                {details.title}
              </h1>
              <p>
                {date} | {rating}
              </p>
              <p>{details.overview}</p>
            </div>
            <div className="flex items-center gap-10 mt-10">
              <Link
                className="font-base text-2xl bg-(--color-primary-500) px-12 py-2 rounded-lg outline-solid outline-(--color-accent-blue-300) hover:bg-(--color-primary-600)"
                to={id}
              >
                More Details
              </Link>
              {/* replace below with icon button component later */}
              <div className="bg-(--color-primary-500) p-2 rounded-full">
                <WishlistIcon className="size-10" />
              </div>
              <div className="bg-(--color-primary-500) p-2 rounded-full">
                <HeartIcon className="size-10" />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
