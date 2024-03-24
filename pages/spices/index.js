import Head from "next/head";

import CardList from "@/Components/CardList/CardList";
import Layout from "@/Components/Layout/Layout";

export default function QuizPage({ data, spicesInfo, handleBookmark }) {
  return (
    <>
      <Head>
        <title>Quiz</title>
      </Head>
      <CardList
        spices={data}
        spicesInfo={spicesInfo}
        handleBookmark={handleBookmark}
      />
      <Layout />
    </>
  );
}
