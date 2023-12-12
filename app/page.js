import Image from "next/image";
import Link from "next/link";
import Subheadline from "./components/Subheadline";
import Headline from "./components/Headline";
import DetailsCard from "./components/DetailsCard";
import LoadingSpinner from "./components/LoadingSpinner";
import WebsiteLink from "./components/WebsiteLink";
import { getBreweryData } from "@/lib/api";

const url = "https://api.openbrewerydb.org/v1/breweries/random";

export default async function Home() {
  // Get brewery data
  const data = await getBreweryData(url);

  if (!data) return <LoadingSpinner />;
  const randomBrewery = data[0];
  const { website_url } = randomBrewery;

  return (
    <>
      <div className="block relative ">
        <Image
          quality={95}
          height={1920}
          width={602}
          className="rounded-3xl object-cover h-96 mx-auto responsive-width md:w-9/12 lg:w-10/12"
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

      <section>
        <Headline $marginY>Brewery of the moment</Headline>

        <DetailsCard brewery={randomBrewery} />
        <WebsiteLink website_url={website_url} />
      </section>

      <section className="mt-7 responsive-width">
        <Subheadline>About</Subheadline>
        <p className={"text-m-0 mx-auto text-center"}>
          Goal is to render the data that I took from{" "}
          <Link
            href="https://www.openbrewerydb.org/"
            className=" hover:underline hover:underline-offset-8 hover:decoration-2 hover:decoration-primaryColor font-medium"
          >
            openbrewerydb.org
          </Link>
        </p>
        <p className={"text-m-0 max-w-[30ch] mt-4 mx-auto text-center"}>
          This second version of the app uses ssr and instead of the Next.js
          Page Router, it uses the App Router.
        </p>
      </section>
    </>
  );
}
