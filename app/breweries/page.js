import Headline from "../components/Headline";
import DetailsCard from "../components/DetailsCard";
import Pagination from "../components/Pagination";
import LoadingSpinner from "../components/LoadingSpinner";
import { getBreweryData } from "@/lib/api";

export default async function Breweries({ searchParams }) {
  // Get brewery data
  const url = `https://api.openbrewerydb.org/v1/breweries?page=${searchParams.page}&per_page=${searchParams.per_page}`;
  const paginatedBreweries = await getBreweryData(url);
  if (!paginatedBreweries) return <LoadingSpinner />;
  return (
    <>
      <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Headline>List of all Breweries</Headline>
        {paginatedBreweries.map((brewery) => {
          return <DetailsCard key={brewery.id} brewery={brewery} />;
        })}
      </section>

      <Pagination />
    </>
  );
}
