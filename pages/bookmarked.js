import CardList from "@/Components/CardList.js";
import Head from "next/head";
import Layout from "@/Components/Layout";
import styled from "styled-components";
import Chilli from "@/icons/chilli.svg";

const StyledSection = styled.section`
  width: 100%;
  height: calc(100vh - 223px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const RedChilli = styled(Chilli)`
  width: 5rem;
  height: 5rem;
  fill: none;
`;

const StyledArticle = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default function Bookmarkpage({ data, spicesInfo, toggleBookmark }) {
  const bookmarkedSpices = data.filter((spice) => spice.isBookmarked);

  return (
    <>
      <Head>
        <title>bookmarked</title>
      </Head>
      {bookmarkedSpices.length === 0 ? (
        <StyledSection>
          <StyledArticle>
            <RedChilli />

            <p>nothing bookmarked...</p>
          </StyledArticle>
        </StyledSection>
      ) : (
        <CardList spices={bookmarkedSpices} toggleBookmark={toggleBookmark} />
      )}

      <Layout />
    </>
  );
}
