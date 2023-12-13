export async function getBreweryData(url) {
  // imitate delay to see the skeleton
  // await new Promise((resolve) => setTimeout(resolve, 3000));
  const res = await fetch(url, {
    next: {
      revalidate: 0, // use 0 to opt out of using cache
    },
  });

  return res.json();
}
