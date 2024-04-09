import CardList from "@/Components/CardList.js";
import Head from "next/head";
import Layout from "@/Components/Layout/Layout";
import styled from "styled-components";
import Chilli from "@/icons/chilli.svg";

const StyledSection = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const RedChilli = styled(Chilli)`
  width: 600px;
  height: 600px;
  fill: red;

  margin-left: 70px;
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
        <StyledSection>
          <RedChilli />
        </StyledSection>
      ) : (
        <CardList spices={bookmarkedSpices} toggleBookmark={toggleBookmark} />
      )}

      <Layout />
    </>
  );
}
