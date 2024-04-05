import CardList from "@/Components/CardList/CardList";
import Head from "next/head";
import Layout from "@/Components/Layout/Layout";
import styled from "styled-components";

const StyledArticle = styled.article`
  margin-top: 200px;
  width: 100px;
  height: 300px;
`;

export default function Bookmarkpage({ data, spicesInfo, toggleBookmark }) {
  const bookmarkedSpices = data.filter((spice) => spice.isBookmarked);

  console.log(bookmarkedSpices);
  return (
    <>
      <Head>
        <title>bookmarked</title>
      </Head>
      {bookmarkedSpices.length === 0 ? (
        <StyledArticle>no bookmarked Spices</StyledArticle>
      ) : (
        <CardList spices={bookmarkedSpices} toggleBookmark={toggleBookmark} />
      )}

      <Layout />
    </>
  );
}
