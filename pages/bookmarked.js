import CardList from "@/Components/CardList/CardList";
import Head from "next/head";

import Layout from "@/Components/Layout/Layout";

export default function Bookmarkpage({ data, spicesInfo, handleBookmark }) {
  /* const { data, isLoading } = useSWR("/api/spices");

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return;
  } */
  /* const bookmarkedSpices = data
    ? data.filter((spice) => spice.isBookmarked === true)
    : null; */

  /* const bookmarkedSpices = data
    ? data.filter((spice) => spice.isBookmarked)
    : null; */

  //const bookmarkedSpices = data.filter((spice) => spice.isBookmarked);

  const bookmarkedSpices = data
    ? data.map((spice) => {
        const { isBookmarked } = spicesInfo.find(
          (info) => info.id === spice.id
        ) ?? {
          isBookmarked: false,
        };
      })
    : null;

  return (
    <>
      <Head>
        <title>bookmarked</title>
      </Head>
      <CardList spices={bookmarkedSpices} handleBookmark={handleBookmark} />
      <Layout />
    </>
  );
}
