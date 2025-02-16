/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from "react-router-dom";
import changeDateFormat from '../../utilities/changeDateFormat';
import changeRating from '../../utilities/changeRating';
import Loader from '../Loader';


export default function HomeHero(props) {
  const { details } = props;
  const id = `/movie/id${details?.id}`

  console.log({details});

  const date = changeDateFormat(details?.release_date);
  const rating = changeRating(details?.vote_average);

  if (!details) return <Loader />


  return (
    <>
    { details && (
      <>
      <div className='md:hidden flex flex-row justify-start items-center gap-4 bg-(--color-primary-500) w-max p-3 mt-12 rounded-r-2xl font-base'>
        <h1 className=' text-xl text-(--color-neutral-lighter) font-title'>{details.title}</h1>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
        </svg>
      </div>
      <img className='hidden xl:block absolute object-contain top-0 left-0 z-[-1] w-full max-h-full' src={`https://image.tmdb.org/t/p/original/${details.backdrop_path}`} alt={details.title} />
      <img className='xl:hidden max-h-full w-full absolute  top-0 left-0 z-[-1]' src={`https://image.tmdb.org/t/p/w500/${details.poster_path}`} alt={details.title} />
      <div className='hidden md:block m-10 max-w-xl'>
        <div className='font-base flex flex-col gap-3 p-5 bg-(--color-accent-blue-300)/10 bg-clip-padding backdrop-filter backdrop-blur-sm backdrop-saturate-100 backdrop-contrast-100 rounded-md border border-(--color-accent-blue-300)'>
          <h1 className='font-title text-4xl text-(--color-neutral-lighter)'>{details.title}</h1>
          <p>{date} | {rating}</p>
          <p>{details.overview}</p>
        </div>
        <div className='flex items-center gap-10 mt-10'>
          <Link className='font-base text-2xl bg-(--color-primary-500) px-12 py-2 rounded-lg outline-solid outline-(--color-accent-blue-300) hover:bg-(--color-primary-600)' to={id}>More Details</Link>
          {/* replace below with icon button component later */}
          <div className='bg-(--color-primary-500) p-2 rounded-full'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10">
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
            </svg>
          </div>
          <div className='bg-(--color-primary-500) p-2 rounded-full'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
            </svg>
          </div>
        </div>
      </div>
      </>
    )}
  </>
  );
}
