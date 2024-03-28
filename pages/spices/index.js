import Head from "next/head";

import CardList from "@/Components/CardList/CardList";
import Layout from "@/Components/Layout/Layout";

export default function QuizPage({ data, spicesInfo, toggleBookmark }) {
  return (
    <>
      <Head>
        <title>Quiz</title>
      </Head>
      <CardList
        spices={data}
        spicesInfo={spicesInfo}
        toggleBookmark={toggleBookmark}
      />
      <Layout />
    </>
  );
}
