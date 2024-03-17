import Head from "next/head";
import styled from "styled-components";
import { StyledLink } from "@/Components/Link/Link.styled";

const StyledSection = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: black;
`;

const StyledArticle = styled.article`
  width: 85vw;
  height: 85vw;
  border: 1px solid black;
  border-radius: 50%;
  background-image: linear-gradient(var(--color1), var(--color2));
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 5rem;
`;
const StyledH1 = styled.h1`
  color: var(--color-font);
  font-size: 3.5rem;
  font-family: var(--font-fat);
  text-align: center;
  transform: rotate(-12deg);
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
          <StyledLink href="/quiz">→ Click here to start ←</StyledLink>
        </StyledArticle>
      </StyledSection>
    </>
  );
}
