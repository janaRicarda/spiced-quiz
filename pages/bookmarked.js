import CardList from "@/Components/CardList/CardList";
import Head from "next/head";
import useSWR from "swr";

export default function Bookmarkpage() {
  const { data, isLoading } = useSWR("/api/spices");

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return;
  }
  /* const bookmarkedSpices = data
    ? data.filter((spice) => spice.isBookmarked === true)
    : null; */

  const bookmarkedSpices = data
    ? data.filter((spice) => spice.isBookmarked)
    : null;

  return (
    <>
      <Head>
        <title>bookmarked</title>
      </Head>
      <CardList data={bookmarkedSpices} />
    </>
  );
}
