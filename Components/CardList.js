import Card from "@/Components/Card/Card";
import styled from "styled-components";

const StyledList = styled.ul`
  list-style: none;
  margin-top: 120px;
  padding-left: 0;
  margin-bottom: 100px;
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
