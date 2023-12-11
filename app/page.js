import Image from "next/image";
import Link from "next/link";

import Subheadline from "./components/Subheadline";
import Headline from "./components/Headline";
import DetailsCard from "./components/DetailsCard";
import Loading from "./components/Loading";

const url = "https://api.openbrewerydb.org/v1/breweries/random";

async function getrandomBrewery() {
  const res = await fetch(url, {
    next: {
      revalidate: 0, // use 0 to opt out of using cache
    },
  });

  return res.json();
}

export default async function Home() {
  const data = await getrandomBrewery();

  if (!data) return <Loading />;
  const randomBrewery = data[0];

  return (
    <>
      <div className="block relative w-72 md:w-9/12 lg:w-10/12">
        <Image
          quality={100}
          height={1920}
          width={602}
          className="rounded-3xl object-cover h-96"
          src="/open-brewery-app-hero-v05.jpg"
          alt="Heroimage"
        />
        <div className="absolute w-full h-full top-0 bottom-0 left-0 right-0 flex items-center justify-center">
          <Link
            href="/breweries"
            className="group flex gap:2 text-xl px-4 py-2 rounded  text-white bg-primaryColor hover:bg-secondaryColor"
          >
            <Image
              width={30}
              height={30}
              src="/arrow-right.svg"
              alt="Arrow icon"
              className="transition-all ease-in-out mr-0 group-hover:mr-4"
            />
            List all breweries
          </Link>
        </div>
      </div>

      <div className="mb-32 flex flex-col">
        <section>
          <Headline marginY>Brewery of the moment</Headline>
          <DetailsCard brewery={randomBrewery} />
          {randomBrewery.website_url && (
            <Link
              href={`${randomBrewery.website_url}`}
              target="_blank"
              className="text-center text-sm font-normal text-white mt-4 mb-12 hover:bg-primaryColor bg-secondaryColor rounded-lg p-2 inline-block w-full"
            >
              {randomBrewery.website_url
                .replace(/^https?\:\/\//i, "")
                .replace(/\/$/, "")}
            </Link>
          )}
        </section>

        <section className="mt-7">
          <Subheadline>About</Subheadline>
          <p className={"text-m-0 max-w-[30ch]"}>
            Goal is to render the data that I took from{" "}
            <Link
              href="https://www.openbrewerydb.org/"
              className=" hover:underline hover:underline-offset-8 hover:decoration-2 hover:decoration-primaryColor font-medium"
            >
              openbrewerydb.org
            </Link>
          </p>
          <p className={"text-m-0 max-w-[30ch] mt-4"}>
            This second version of the app uses ssr and instead of the Next.js
            Page Router, it uses the App Router
          </p>
        </section>
      </div>
    </>
  );
}
