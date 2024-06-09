import Head from "next/head";
import Layout from "@/Components/Layout";
import CardList from "@/Components/CardList";

export default function QuizPage({ data, toggleBookmark }) {
  return (
    <>
      <Head>
        <title>Quiz</title>
      </Head>
      <CardList spices={data} toggleBookmark={toggleBookmark} />
      <Layout />
    </>
  );
}
