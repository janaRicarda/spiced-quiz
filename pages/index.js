import Head from "next/head";

import CardList from "@/Components/CardList/CardList";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <CardList />
    </>
  );
}
