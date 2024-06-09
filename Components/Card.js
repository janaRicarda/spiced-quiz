import { StyledLink } from "../Components/StyledLink";
import Chilli from "../icons/chilli.svg";
import styled from "styled-components";

const StyledCard = styled.article`
  border-radius: 12px;
  background-color: rgba(255, 255, 255, 0.15);
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(15px);
  color: var(--font);
  font-weight: bold;
  padding: 1.5rem;
  margin: 2rem;
  height: 40%;
  width: auto;
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
  border: 1px solid var(--font);
  background-color: transparent;
  color: var(--font);
  &:hover {
    background-color: var(--background);
  }
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
  handleAnswer,
  isShown,
}) {
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

{
  /* <StyledCard>
      <p>{question}</p>
      <StyledBookmarkButton
        type="button"
        title={isBookmarked ? "unbookmark" : "bookmark"}
        onClick={() => toggleBookmark(id)}
      >
        <StyledChilli $isBookmarked={isBookmarked} />
      </StyledBookmarkButton>
      <StyledAnswerButton
        type="button"
        onClick={handleAnswer}
        clicked={clicked}
      >
        {clicked ? "Hide answer" : "Show answer"}
      </StyledAnswerButton>
      {clicked && <p>{answer}</p>}
    </StyledCard> */
}
