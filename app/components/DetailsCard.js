import Link from "next/link";
import Subheadline from "./Subheadline";

export default function DetailsCard({ brewery }) {
  const { name, brewery_type, city, country, id } = brewery;
  return (
    <Link href={`/breweries/${id}`} className="group relative block md:h-56">
      {/* Decorative cicles */}
      <div className="absolute w-2 h-2 rounded-full inline-block bg-secondaryColor group-hover:bg-mediumBrownBackgroundColor left-2 top-2"></div>
      <div className="absolute w-2 h-2 rounded-full inline-block bg-secondaryColor group-hover:bg-mediumBrownBackgroundColor right-2 top-2"></div>
      <div className="absolute w-2 h-2 rounded-full inline-block bg-secondaryColor group-hover:bg-mediumBrownBackgroundColor left-2 bottom-2"></div>
      <div className="absolute w-2 h-2 rounded-full inline-block bg-secondaryColor group-hover:bg-mediumBrownBackgroundColor right-2 bottom-2"></div>

      <div className="mb-2 flex flex-col justify-between bg-mediumBrownBackgroundColor group-hover:bg-secondaryColor rounded-lg p-4 h-full">
        <Subheadline>{name}</Subheadline>
        {/* Start cards */}
        <ul className="divide-y divide-secondaryColor group-hover:divide-mediumBrownBackgroundColor">
          <li className="flex justify-between py-2">
            <p
              className={"text-m-0 max-w-[30ch] text-white font-light text-sm"}
            >
              Brewery type
            </p>
            <p
              className={"text-m-0 max-w-[30ch] text-white font-light text-sm"}
            >
              {brewery_type}
            </p>
          </li>
          <li className="flex justify-between py-2">
            <p
              className={"text-m-0 max-w-[30ch] text-white font-light text-sm"}
            >
              City
            </p>
            <p
              className={"text-m-0 max-w-[30ch] text-white font-light text-sm"}
            >
              {city}
            </p>
          </li>
          <li className="flex justify-between py-2">
            <p
              className={"text-m-0 max-w-[30ch] text-white font-light text-sm"}
            >
              Country
            </p>
            <p
              className={"text-m-0 max-w-[30ch] text-white font-light text-sm"}
            >
              {country}
            </p>
          </li>
        </ul>
      </div>
    </Link>
  );
}
