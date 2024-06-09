import Card from "@/Components/Card";
import styled from "styled-components";

const StyledList = styled.ul`
  list-style: none;
  padding-left: 0;
  width: 70vw;
`;

export default function CardList({
  spices,
  toggleBookmark,
  handleAnswer,
  isShown,
}) {
  return (
    <StyledList>
      {spices.map((spice) => (
        <li key={spice._id}>
          <Card
            handleAnswer={handleAnswer}
            isShown={isShown}
            question={spice.question}
            answer={spice.answer}
            isBookmarked={spice.isBookmarked}
            toggleBookmark={toggleBookmark}
            id={spice._id}
          />
        </li>
      ))}
    </StyledList>
  );
}
