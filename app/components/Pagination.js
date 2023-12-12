"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Pagination({
  smallPagination,
  mediumPagination,
  firstPage,
  breweriesMetadata,
}) {
  const [limit, setLimit] = useState(smallPagination);
  const [page, setPage] = useState(firstPage);
  const router = useRouter();

  useEffect(() => {
    router.push(`/breweries?page=${page}&per_page=${limit}`, { scroll: false });
  }, [limit, page]);

  // pagination settings

  // Check if the end of the list is reached
  // if (paginatedBreweries.length === 0) setPage(1);
  // if (paginatedBreweries.length < limit) hasNextPage = false;
  // else hasNextPage = true;

  // Next page navigation
  function handleNextPage() {
    setPage(page + 1);
    router.push(`/breweries?page=${page}&per_page=${limit}`);
  }

  // Previous page navigation
  function handlePreviousPage() {
    setPage(page - 1);
    router.push(`/breweries?page=${page}&per_page=${limit}`);
  }

  function handleChangeOffset(offset) {
    setLimit(`${offset}`);
  }

  return (
    <nav className="flex flex-col gap-5">
      {/* Current page with decoration */}
      <div className="flex justify-center items-center mb-10 gap-1">
        <div className="w-full bg-gradient-to-l from-mediumBrownBackgroundColor to-softBackgroundColor h-0.5"></div>
        <p className="bg-primaryColor font-bold flex justify-center items-center p-2 rounded-md w-full h-6 text-almostBlackColor outline outline-offset-4 outline-2 outline-mediumBrownBackgroundColor">
          {page} / {Math.round(breweriesMetadata / limit)} pages
        </p>
        <div className="w-full  h-0.5 bg-gradient-to-r from-mediumBrownBackgroundColor to-softBackgroundColor"></div>
      </div>
      {/* Pagination controls */}
      <div className="flex gap-8 justify-between">
        <div className="flex gap-4">
          <button
            className="text-almostBlackColor font-semibold bg-primaryColor hover:bg-secondaryColor flex justify-center items-center p-2 rounded-full w-12 h-12 hover:text-white"
            onClick={() => handleChangeOffset(smallPagination)}
          >
            {smallPagination}
          </button>
          <button
            className=" text-almostBlackColor font-semibold bg-primaryColor hover:bg-secondaryColor flex justify-center items-center p-2 rounded-full w-12 h-12 hover:text-white"
            onClick={() => handleChangeOffset(mediumPagination)}
          >
            {mediumPagination}
          </button>
        </div>
        <div className="flex gap-4">
          <button
            className="disabled:opacity-75 font-medium disabled:hover:bg-primaryColor disabled:hover:text-almostBlackColor bg-primaryColor hover:bg-secondaryColor hover:text-white p-2 rounded-md w-24 disabled:cursor-not-allowed"
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
