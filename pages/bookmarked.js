import CardList from "@/Components/CardList/CardList";
import spices from "@/data";
import Head from "next/head";

export default function Bookmarkpage() {
  return (
    <>
      <Head>
        <title>bookmarked</title>
      </Head>
      <CardList spices={spices} />
    </>
  );
}
