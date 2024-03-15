import styled from "styled-components";
import { useState } from "react";
import useSWR from "swr";
import { useRouter } from "next/router";

const StyledCard = styled.article`
  border-radius: 12px;
  background-color: white;
  padding: 1rem;
  margin: 1.5rem;
  height: 62vw;
  width: auto;
  text-align: center;
  position: relative;
`;
const StyledBookmarkButton = styled.button`
  border-style: none;
  background-color: pink;
  font-size: 2rem;
  border: 1px solid pink;
  border-radius: 50%;
  background-color: white;
  position: absolute;
  top: -15px;
  right: -10px;
`;

const StyledAnswerButton = styled.button`
  border-style: none;
  padding: 1rem;
  border-radius: 6px;
  border: 1px solid hotpink;
  background-color: white;
  color: hotpink;
`;

export default function Card({ question, answer }) {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [clicked, setClicked] = useState(false);
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading } = useSWR("/api/spices");

  function handleBookmark() {
    setIsBookmarked(!isBookmarked);
  }

  function handleAnswer() {
    setClicked(!clicked);
  }
  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return;
  }

  return (
    <StyledCard>
      <h1>{question}</h1>
      <StyledBookmarkButton type="button" onClick={handleBookmark}>
        {isBookmarked ? "💜" : "🧡"}
      </StyledBookmarkButton>
      <StyledAnswerButton type="button" onClick={handleAnswer}>
        {clicked ? "Hide answer" : "Show answer"}
      </StyledAnswerButton>
      {clicked && <p>{answer}</p>}
    </StyledCard>
  );
}
