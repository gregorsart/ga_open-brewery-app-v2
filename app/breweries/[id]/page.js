import Subheadline from "@/app/components/Subheadline";
import WebsiteLink from "@/app/components/WebsiteLink";

export default async function Brewery({ params }) {
  async function getBrewery() {
    // imitate delay to see the skeleton
    await new Promise((resolve) => setTimeout(resolve, 3000));
    const url = `https://api.openbrewerydb.org/v1/breweries/${params.id}`;
    const res = await fetch(url, {
      next: {
        revalidate: 0, // use 0 to opt out of using cache
      },
    });

    return res.json();
  }
  const singleBrewery = await getBrewery();
  if (!singleBrewery) return <LoadingSpinner />;
  const {
    name,
    brewery_type,
    city,
    country,
    address_1,
    address_2,
    address_3,
    state,
    postal_code,
    phone,
    website_url,
  } = singleBrewery;
  return (
    <section className="relative block w-72">
      {/* Decorative cicles */}
      <div className="absolute w-2 h-2 rounded-full inline-block bg-secondaryColor left-2 top-2"></div>
      <div className="absolute w-2 h-2 rounded-full inline-block bg-secondaryColor right-2 top-2"></div>
      <div className="absolute w-2 h-2 rounded-full inline-block bg-secondaryColor left-2 bottom-2"></div>
      <div className="absolute w-2 h-2 rounded-full inline-block bg-secondaryColor right-2 bottom-2"></div>

      <div className="flex flex-col justify-between bg-mediumBrownBackgroundColor  rounded-lg p-4">
        <Subheadline>{name}</Subheadline>
        {/* Basic information */}
        <ul className="divide-y divide-secondaryColor mb-12">
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
              Address
            </p>
            <p
              className={"text-m-0 max-w-[30ch] text-white font-light text-sm"}
            >
              {address_1}
            </p>
          </li>
          {address_2 && (
            <li className="flex justify-between py-2">
              <p
                className={
                  "text-m-0 max-w-[30ch] text-white font-light text-sm"
                }
              >
                Address 2
              </p>
              <p
                className={
                  "text-m-0 max-w-[30ch] text-white font-light text-sm"
                }
              >
                {address_2}
              </p>
            </li>
          )}
          {address_3 && (
            <li className="flex justify-between py-2">
              <p
                className={
                  "text-m-0 max-w-[30ch] text-white font-light text-sm"
                }
              >
                Address 3
              </p>
              <p
                className={
                  "text-m-0 max-w-[30ch] text-white font-light text-sm"
                }
              >
                {address_3}
              </p>
            </li>
          )}
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
              State
            </p>
            <p
              className={"text-m-0 max-w-[30ch] text-white font-light text-sm"}
            >
              {state}
            </p>
          </li>
          <li className="flex justify-between py-2">
            <p
              className={"text-m-0 max-w-[30ch] text-white font-light text-sm"}
            >
              Postal code
            </p>
            <p
              className={"text-m-0 max-w-[30ch] text-white font-light text-sm"}
            >
              {postal_code}
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
          {phone && (
            <li className="flex justify-between py-2">
              <p
                className={
                  "text-m-0 max-w-[30ch] text-white font-light text-sm"
                }
              >
                Phone
              </p>
              <p
                className={
                  "text-m-0 max-w-[30ch] text-white font-light text-sm"
                }
              >
                {phone}
              </p>
            </li>
          )}
        </ul>
        <WebsiteLink website_url={website_url} />
      </div>
    </section>
  );
}
