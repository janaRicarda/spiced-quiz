import CardList from "@/Components/CardList/CardList";
import Head from "next/head";
import useSWR from "swr";
import { useState } from "react";

export default function Bookmarkpage() {
  const { data } = useSWR("/api/spices");

  return (
    <>
      <Head>
        <title>bookmarked</title>
      </Head>
      <CardList />
    </>
  );
}
