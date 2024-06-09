import Head from "next/head";
import Layout from "@/Components/Layout";
import CardList from "@/Components/CardList";
import { useState } from "react";

export default function QuizPage({ data, toggleBookmark }) {
  const [isShown, setIsShown] = useState(false);

  function handleAnswer() {
    setIsShown(!isShown);
  }
  return (
    <>
      <Head>
        <title>Quiz</title>
      </Head>
      <CardList
        spices={data}
        toggleBookmark={toggleBookmark}
        handleAnswer={handleAnswer}
        isShown={isShown}
      />
      <Layout />
    </>
  );
}
