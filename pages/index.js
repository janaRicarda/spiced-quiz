import { Abril_Fatface } from "next/font/google";
import Head from "next/head";
import spices from "@/data";
import CardList from "@/Components/CardList/CardList";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <CardList spices={spices} />
    </>
  );
}
