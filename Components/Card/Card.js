import {
  StyledCard,
  StyledAnswerButton,
  StyledBookmarkButton,
  isBookmarked,
} from "./Card.styled";
import { useState } from "react";
import { StyledLink } from "../Link/Link.styled";

export default function Card({ id, question, answer }) {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [clicked, setClicked] = useState(false);

  //const [spicesInfo, setSpicesInfo] = useState([]);

  /* const router = useRouter();
  const { id } = router.query; */

  //let updatedSpices = spicesInfo.length > 0 ? spicesInfo : data;

  /* function handleBookmark(id) {
    setSpicesInfo((spicesInfo) => {
      const info = spicesInfo.find((info) => info.id === id);
      if (info) {
        return spicesInfo.map((info) =>
          info.id === id ? { ...info, isBookmarked: !info.isBookmarked } : info
        );
      }
      return [...spicesInfo, { id, isBookmarked: true }];
    });
  } */

  /* function handleBookmark(id) {
    setSpicesInfo(
      updatedSpices.map((spice) =>
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
      <p>{question}</p>
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
      {clicked && <StyledLink href={id}>{answer}</StyledLink>}
    </StyledCard>
  );
}
