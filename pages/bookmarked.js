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

const StyledDiv = styled.div`
  width: 100%;
  height: auto;
`;

const RedChilli = styled(Chilli)`
  fill: none;
  padding: 0;
  margin: 0;

  //position: fixed;
`;

const StyledArticle = styled.article`
  padding: 0;
  margin: 0;
  position: absolute;
  right: 10rem;
  top: 8rem;
  z-index: 1;
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
          <StyledDiv>
            <RedChilli />
            {/*  <StyledArticle>
              <p>not filled yet...</p>
            </StyledArticle> */}
          </StyledDiv>
        </StyledSection>
      ) : (
        <CardList spices={bookmarkedSpices} toggleBookmark={toggleBookmark} />
      )}

      <Layout />
    </>
  );
}
