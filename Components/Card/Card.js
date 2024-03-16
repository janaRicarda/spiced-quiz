import styled from "styled-components";
import { useState } from "react";

import { useRouter } from "next/router";

const StyledCard = styled.article`
  border-radius: 12px;
  background-color: white;
  color: var(--color1);
  padding: 1.5rem;
  margin: 1.5rem;
  height: 62vw;
  width: auto;
  text-align: center;
  position: relative;
`;
const StyledBookmarkButton = styled.button`
  border-style: none;

  font-size: 2rem;
  border: 1px solid var(--color1);
  border-radius: 50%;
  background-color: ${({ $isBookmarked }) =>
    $isBookmarked ? "black" : "white"};
  position: absolute;
  top: -15px;
  right: -10px;
`;

const StyledAnswerButton = styled.button`
  border-style: none;
  padding: 1rem;
  border-radius: 6px;
  border: 1px solid var(--color1);
  background-color: white;
  color: var(--color1);
`;

export default function Card({ data, id, question, answer }) {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [clicked, setClicked] = useState(false);

  //const [spicesInfo, setSpicesInfo] = useState([]);

  const router = useRouter();
  //const { id } = router.query;

  //let updatedSpices = spicesInfo.length ? spicesInfo : data;

  /* function handleBookmark(id) {
    setSpicesInfo(
      data.map((spice) =>
        spice._id === id
          ? { ...spice, isBookmarked: !spice.isBookmarked }
          : spice
      )
    );
  }
 */
  function handleBookmark() {
    setIsBookmarked(!isBookmarked);
  }
  function handleAnswer() {
    setClicked(!clicked);
  }

  return (
    <StyledCard>
      <h1>{question}</h1>
      <StyledBookmarkButton
        type="button"
        onClick={() => handleBookmark()}
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
      {clicked && <p>{answer}</p>}
    </StyledCard>
  );
}
