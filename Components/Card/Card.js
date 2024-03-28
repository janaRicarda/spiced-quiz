import {
  StyledCard,
  StyledAnswerButton,
  StyledBookmarkButton,
} from "./Card.styled";
import { useState } from "react";
import { StyledLink } from "../Link/Link.styled";
//import Chilli from "../../icons/chilli.svg";
//import styled from "styled-components";

/* const StyledChilli = styled(Chilli)`
  width: 40px;
  height: 40px;
  fill: black;
  color: black;
`; */

export default function Card({
  id,
  toggleBookmark,
  isBookmarked,
  question,
  answer,
}) {
  const [clicked, setClicked] = useState(false);

  function handleAnswer() {
    setClicked(!clicked);
  }

  return (
    <StyledCard>
      <p>{question}</p>
      <StyledBookmarkButton
        type="button"
        onClick={() => toggleBookmark(id)}
        $isBookmarked={isBookmarked}
      >
        🌶️
      </StyledBookmarkButton>
      <StyledAnswerButton
        type="button"
        onClick={handleAnswer}
        clicked={clicked}
      >
        {clicked ? "Hide answer" : "Show answer"}
      </StyledAnswerButton>
      {clicked && <StyledLink href={`/spices/${id}`}>{answer} 🔍</StyledLink>}
    </StyledCard>
  );
}
