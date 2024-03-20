import Head from "next/head";

import CardList from "@/Components/CardList/CardList";
import Layout from "@/Components/Layout/Layout";

export default function QuizPage({
  data,
  dataInfo,
  isBookmarked,
  handleBookmark,
}) {
  return (
    <>
      <Head>
        <title>Quiz</title>
      </Head>
      <CardList
        data={data}
        dataInfo={dataInfo}
        isBookmarked={isBookmarked}
        handleBookmark={handleBookmark}
      />
      <Layout />
    </>
  );
}
