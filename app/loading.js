export default function Loading() {
  // Skeleton for homepage
  return (
    <div className="block animate-pulse w-full mx-auto">
      {/* Image */}
      <div className="block relative">
        <div className="rounded-3xl h-96 mx-auto responsive-width md:w-9/12 lg:w-10/12 bg-mediumGrayBackgroundColor"></div>
        <div className="absolute w-full h-full top-0 bottom-0 left-0 right-0 flex items-center justify-center">
          <div className="w-52 h-12 px-4 py-2 rounded bg-softBackgroundColor"></div>
        </div>
      </div>
      {/* Headline */}
      <div className="mb-2 flex flex-col justify-center bg-softBackgroundColor animate-pulse rounded-lg p-4 h-full w-80 mt-8 mx-auto">
        <div className="h-8 bg-mediumGrayBackgroundColor rounded w-1/2 mx-auto mb-3"></div>
        <div className="h-8 bg-mediumGrayBackgroundColor rounded w-1/3 mx-auto mb-3"></div>
      </div>
      {/* card */}
      <div className="mb-2 flex flex-col justify-between bg-softBackgroundColor animate-pulse rounded-lg p-4 h-full w-80 mx-auto">
        <div className="mt-5 bg-mediumGrayBackgroundColor p-4 rounded-md">
          <div className="h-6 bg-softBackgroundColor rounded w-1/3 mx-auto mb-3"></div>
          <ul className="divide-y divide-softBackgroundColor mt-8">
            <li className="flex justify-between py-2">
              <div className="h-4 bg-softBackgroundColor rounded w-1/4"></div>
              <div className="h-4 bg-softBackgroundColor rounded w-1/4"></div>
            </li>
            <li className="flex justify-between py-2">
              <div className="h-4 bg-softBackgroundColor rounded w-1/4"></div>
              <div className="h-4 bg-softBackgroundColor rounded w-1/4"></div>
            </li>
            <li className="flex justify-between py-2">
              <div className="h-4 bg-softBackgroundColor rounded w-1/4"></div>
              <div className="h-4 bg-softBackgroundColor rounded w-1/4"></div>
            </li>
          </ul>
        </div>
      </div>
      {/* about text */}
      <div className="mb-2 flex flex-col justify-center bg-softBackgroundColor animate-pulse rounded-lg p-4 h-full w-80 mt-8 mx-auto">
        <div className="h-8 bg-mediumGrayBackgroundColor rounded w-1/2 mx-auto mb-3"></div>
        <div className="h-3 bg-mediumGrayBackgroundColor rounded w-full mx-auto mb-3"></div>
        <div className="h-3 bg-mediumGrayBackgroundColor rounded w-4/5 mx-auto mb-3"></div>

        <div className="h-3 bg-mediumGrayBackgroundColor rounded w-full mx-auto mb-3 mt-5"></div>
        <div className="h-3 bg-mediumGrayBackgroundColor rounded w-5/6 mx-auto mb-3"></div>
        <div className="h-3 bg-mediumGrayBackgroundColor rounded w-4/5 mx-auto mb-3"></div>
      </div>
    </div>
  );
}
