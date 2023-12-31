"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Pagination({ firstPage, breweriesMetadata }) {
  const smallPagination = 9;
  const mediumPagination = 15;
  const [limit, setLimit] = useState(9);
  const [page, setPage] = useState(1);
  const [activeSmall, setActiveSmall] = useState(true);
  const router = useRouter();

  useEffect(() => {
    router.push(`/breweries?page=${page}&per_page=${limit}`, { scroll: false });
  }, [limit, page]);

  // pagination settings
  // Check if the end of the list is reached

  // let hasNextPage = true;
  // if (paginatedBreweries.length === 0) setPage(1);
  // if (paginatedBreweries.length < limit) hasNextPage = false;
  // else hasNextPage = true;

  // Next page navigation
  function handleNextPage() {
    setPage(page + 1);
    if (limit === smallPagination) setActiveSmall(true);
    else setActiveSmall(false);
    router.push(`/breweries?page=${page}&per_page=${limit}`);
  }

  // Previous page navigation
  function handlePreviousPage() {
    setPage(page - 1);
    router.push(`/breweries?page=${page}&per_page=${limit}`);
  }

  function handleChangeOffset(offset) {
    setLimit(`${offset}`);
    if ((offset = mediumPagination)) setActiveSmall(false);
    else setActiveSmall(true);
  }

  console.log("limit---", limit, mediumPagination);

  return (
    <nav className="flex flex-col gap-5">
      {/* Current page with decoration */}
      <div className="flex justify-center items-center mb-10 gap-1">
        <div className="w-full bg-gradient-to-l from-mediumBrownBackgroundColor to-softBackgroundColor h-0.5"></div>
        <p className="bg-primaryColor font-semibold flex justify-center items-center p-2 rounded-md w-full h-6 text-almostBlackColor outline outline-offset-4 outline-2 outline-mediumBrownBackgroundColor">
          page {page} / {Math.round(breweriesMetadata / limit)}
        </p>
        <div className="w-full  h-0.5 bg-gradient-to-r from-mediumBrownBackgroundColor to-softBackgroundColor"></div>
      </div>
      {/* Pagination controls */}
      <div className="flex gap-8 justify-between">
        <div className="flex gap-4">
          <button
            className={
              activeSmall
                ? "text-white font-semibold bg-secondaryColor hover:bg-secondaryColor flex justify-center items-center p-2 rounded-full w-12 h-12 hover:text-white"
                : "text-almostBlackColor font-semibold bg-primaryColor hover:bg-secondaryColor flex justify-center items-center p-2 rounded-full w-12 h-12 hover:text-white"
            }
            onClick={() => handleChangeOffset(smallPagination)}
          >
            {smallPagination}
          </button>
          <button
            className={
              !activeSmall
                ? "text-white bg-secondaryColor font-semibold hover:bg-secondaryColor flex justify-center items-center p-2 rounded-full w-12 h-12 hover:text-white"
                : "text-almostBlackColor font-semibold bg-primaryColor hover:bg-secondaryColor flex justify-center items-center p-2 rounded-full w-12 h-12 hover:text-white"
            }
            onClick={() => handleChangeOffset(mediumPagination)}
          >
            {mediumPagination}
          </button>
        </div>
        <div className="flex gap-4">
          <button
            className="disabled:opacity-50 font-medium disabled:hover:bg-primaryColor disabled:hover:text-almostBlackColor bg-primaryColor hover:bg-secondaryColor hover:text-white p-2 rounded-md w-24 disabled:cursor-not-allowed"
            onClick={handlePreviousPage}
            disabled={page === 1}
          >
            previous
          </button>
          <button
            className="disabled:opacity-50 font-medium disabled:hover:bg-primaryColor disabled:hover:text-almostBlackColor bg-primaryColor hover:bg-secondaryColor hover:text-white p-2 rounded-md w-24 disabled:cursor-not-allowed"
            // disabled={!hasNextPage}
            onClick={handleNextPage}
          >
            next
          </button>
        </div>
      </div>
    </nav>
  );
}
