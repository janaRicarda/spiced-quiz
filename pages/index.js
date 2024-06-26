import Head from "next/head";
import styled from "styled-components";

import Link from "next/link";

const StyledSection = styled.section`
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--font);
`;

const StyledArticle = styled.article`
  width: 320px;
  height: 320px;
  border-radius: 50%;
  background-image: linear-gradient(var(--background), var(--main-bright));
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 5rem;
  position: relative;
`;
const StyledH1 = styled.h1`
  position: absolute;
  top: 17%;
  color: var(--font);
  font-size: 2.5rem;
  font-family: var(--font-fat);
  line-height: 2.5rem;
  text-align: center;
  transform: rotate(-12deg);
`;
const StyledStartLink = styled(Link)`
  position: absolute;
  bottom: 20%;
  text-decoration: none;
  font-weight: bold;
  padding: 0.5rem;
  border-radius: 6px;
  &:hover {
    background-color: var(--font);
    color: var(--background);
  }
`;

export default function StartPage() {
  return (
    <>
      <Head>
        <title>Spiced-Quiz</title>
      </Head>

      <StyledSection>
        <StyledArticle>
          <StyledH1>Welcome to the spiced Quiz!</StyledH1>
          <StyledStartLink $startLink href="/spices">
            → Click here to start ←
          </StyledStartLink>
        </StyledArticle>
      </StyledSection>
    </>
  );
}
