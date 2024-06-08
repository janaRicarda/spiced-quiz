import Card from "@/Components/Card/Card";
import styled from "styled-components";

const StyledList = styled.ul`
  list-style: none;
  padding-left: 0;
  width: 70vw;
`;

export default function CardList({ spices, toggleBookmark }) {
  return (
    <StyledList>
      {spices.map((spice) => (
        <li key={spice._id}>
          <Card
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
