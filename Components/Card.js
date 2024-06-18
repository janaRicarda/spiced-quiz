import { StyledLink } from "../Components/StyledLink";
import Chilli from "../icons/chilli.svg";
import styled from "styled-components";
import { useState } from "react";

const StyledCard = styled.article`
  border-radius: 12px;
  background: var(--section-background);
  color: var(--font);
  font-weight: bold;
  padding: 1.5rem;
  margin: 2rem;
  text-align: center;
  position: relative;
`;

const StyledBookmarkButton = styled.button`
  background-color: transparent;
  border-style: none;
  position: absolute;
  top: -1.3rem;
  right: -1rem;
`;

const StyledAnswerButton = styled.button`
  border-style: none;
  padding: 1rem;
  border-radius: 6px;
  background-color: var(--background);
  color: var(--font);
`;

const StyledChilli = styled(Chilli)`
  width: 3rem;
  height: 3rem;
  fill: ${({ $isBookmarked }) =>
    $isBookmarked ? "var(--font)" : "transparent"};
  &:hover {
    cursor: pointer;
  }
`;

export default function Card({
  id,
  toggleBookmark,
  isBookmarked,
  question,
  answer,
}) {
  const [isShown, setIsShown] = useState(false);

  function handleAnswer() {
    setIsShown(!isShown);
  }
  return (
    <StyledCard>
      <p>{question}</p>
      <StyledBookmarkButton
        type="button"
        title={isBookmarked ? "unbookmark" : "bookmark"}
        onClick={() => toggleBookmark(id)}
      >
        <StyledChilli $isBookmarked={isBookmarked} />
      </StyledBookmarkButton>
      <StyledAnswerButton type="button" onClick={handleAnswer}>
        {isShown ? "Hide answer" : "Show answer"}
      </StyledAnswerButton>
      {isShown && (
        <StyledLink title="click for more details" href={`/spices/${id}`}>
          {answer} 🔍
        </StyledLink>
      )}
    </StyledCard>
  );
}
