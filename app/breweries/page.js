import Headline from "../components/Headline";
import DetailsCard from "../components/DetailsCard";
import Pagination from "../components/Pagination";

export default async function Breweries({ searchParams }) {
  async function getBreweries() {
    const url = `https://api.openbrewerydb.org/v1/breweries?page=${searchParams.page}&per_page=${searchParams.per_page}`;
    const res = await fetch(url, {
      next: {
        revalidate: 0, // use 0 to opt out of using cache
      },
    });

    return res.json();
  }
  const paginatedBreweries = await getBreweries();
  return (
    <>
      <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:auto-rows-fr lg:max-w-5xl lg:w-full">
        <Headline>List of all Breweries</Headline>
        {paginatedBreweries.map((brewery) => {
          return <DetailsCard key={brewery.id} brewery={brewery} />;
        })}
      </section>
      <Pagination />
    </>
  );
}
