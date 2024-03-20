import Head from "next/head";
import useSWR from "swr";
import CardList from "@/Components/CardList/CardList";
import Layout from "@/Components/Layout/Layout";

export default function QuizPage({ dataInfo, isBookmarked, handleBookmark }) {
  const { data, isLoading } = useSWR("/api/spices");

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  /* if (!data) {
    return;
  } */

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
