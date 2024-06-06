import React, { useEffect, useState } from 'react';
import 'tailwindcss/tailwind.css';
import { Bookmark, BookmarkCheck, Share2, CheckCheck } from 'lucide-react';

const Card = ({ imageUrl, type, title, rating, description }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isShared, setIsShared] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleBookmarkClick = () => {
    setIsBookmarked(!isBookmarked);
  };

  const handleShareClick = () => {
    setIsShared(!isShared);
  };

  if (isLoading) {
    return (
      <div className="flex flex-col rounded-lg bg-white text-gray-800 shadow-lg h-full px-4 animate-pulse mx-auto w-full max-w-screen-md">
        <div className="relative mx-4 mt-4 overflow-hidden rounded-lg bg-gray-300 bg-clip-border h-0 pb-[125%]"></div>
        <div className="p-6 flex-grow space-y-4 flex flex-col">
          <div className="h-4 bg-gray-300 rounded"></div>
          <div className="h-4 bg-gray-300 rounded w-3/4"></div>
          <div className="h-4 bg-gray-300 rounded w-1/2"></div>
          <div className="flex-grow"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col rounded-lg bg-white text-gray-800 shadow-lg hover:shadow-2xl transition-shadow duration-300 h-full px-4 mx-auto w-full max-w-screen-md">
      <div className="relative mx-2 mt-2 overflow-hidden rounded-lg bg-gray-300 bg-clip-border text-white">
        <div className="relative h-0 pb-[125%]">
          <img
            src={imageUrl}
            alt={title}
            className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-300 transform hover:scale-105"
          />
          {type && (
            <div className="absolute top-2 left-2 flex">
              <span
                className={`px-2 py-1 text-xs font-semibold rounded-lg hover:opacity-80 transition duration-300 ${
                  type === 'trending'
                    ? 'bg-amber-500 hover:bg-amber-600'
                    : type === 'recommended'
                    ? 'bg-teal-500 hover:bg-teal-600'
                    : 'bg-pink-500 hover:bg-pink-600'
                }`}
              >
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </span>
            </div>
          )}
          <div className="absolute top-2 right-2 flex space-x-2">
            <button
              className={`h-6 w-6 rounded-full bg-teal-500 bg-opacity-70 text-white flex items-center justify-center transition-transform duration-300 transform hover:scale-110`}
              type="button"
              onClick={handleBookmarkClick}
            >
              {isBookmarked ? <BookmarkCheck size={18} /> : <Bookmark size={18} />}
            </button>
            <button
              className={`h-6 w-6 rounded-full bg-teal-500 bg-opacity-70 text-white flex items-center justify-center transition-transform duration-300 transform hover:scale-110`}
              type="button"
              onClick={handleShareClick}
            >
              {isShared ? <CheckCheck size={16} /> : <Share2 size={16} />}
            </button>
          </div>
        </div>
      </div>
      <div className="p-2 flex-grow">
        <div className="mb-2 flex items-center justify-between">
          <h5 className="block font-sans text-sm font-medium leading-snug tracking-normal text-gray-900 antialiased">
            {title}
          </h5>
          <p className="flex items-center gap-1 font-sans text-xs font-normal leading-relaxed text-gray-900 antialiased">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              className="-mt-0.5 h-4 w-4 text-amber-500"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clipRule="evenodd"
              ></path>
            </svg>
            {rating.toFixed(1)}
          </p>
        </div>
        <p className="block font-sans text-xs font-light leading-relaxed text-gray-700 antialiased">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Card;