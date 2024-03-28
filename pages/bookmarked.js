import CardList from "@/Components/CardList/CardList";
import Head from "next/head";
import Layout from "@/Components/Layout/Layout";

export default function Bookmarkpage({
  data,

  spicesInfo,
  toggleBookmark,
}) {
  const bookmarkedSpices = data.filter((spice) => spice.isBookmarked);

  /*  const bookmarkedSpices = data
    ? data.map((spice) => {
        const { isBookmarked } = spicesInfo.find(
          (info) => info.id === spice.id
        ) ?? {
          isBookmarked: false,
        };
      })
    : null; */
  console.log(bookmarkedSpices);
  return (
    <>
      <Head>
        <title>bookmarked</title>
      </Head>
      <CardList
        spices={bookmarkedSpices}
        spicesInfo={spicesInfo}
        toggleBookmark={toggleBookmark}
      />
      <Layout />
    </>
  );
}
