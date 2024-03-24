import {
  StyledCard,
  StyledAnswerButton,
  StyledBookmarkButton,
  isBookmarked,
} from "./Card.styled";
import { useState } from "react";
import { StyledLink } from "../Link/Link.styled";
import Chilli from "../../icons/chilli.svg";
import styled from "styled-components";

const StyledChilli = styled(Chilli)`
  width: 40px;
  height: 40px;
  fill: black;
  color: black;
`;

export default function Card({
  id,
  handleBookmark,
  isBookmarked,
  question,
  answer,
}) {
  // const [isBookmarked, setIsBookmarked] = useState(false);
  const [clicked, setClicked] = useState(false);

  //const [dataInfo, setDataInfo] = useState([]);

  /* const router = useRouter();
  const { id } = router.query; */

  //let updatedSpices = spicesInfo.length > 0 ? spicesInfo : data;

  /* function handleBookmark(id) {
    setDataInfo((dataInfo) => {
      const info = dataInfo.find((info) => info.id === id);
      if (info) {
        return dataInfo.map((info) =>
          info.id === id ? { ...info, isBookmarked: !info.isBookmarked } : info
        );
      }
      return [...dataInfo, { id, isBookmarked: true }];
    });
  } */

  function handleAnswer() {
    setClicked(!clicked);
  }

  return (
    <StyledCard>
      <p>{question}</p>
      <StyledBookmarkButton
        type="button"
        onClick={() => handleBookmark(id)}
        $bookmark={isBookmarked}
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
