import Card from "../Card/Card";
import styled from "styled-components";

const StyledList = styled.ul`
  list-style: none;
  margin-top: 100px;
  padding-left: 0;
`;

export default function CardList({ spices }) {
  return (
    <>
      <StyledList spices={spices}>
        {spices.map((spice) => (
          <li key={spice.id}>
            <Card question={spice.question} answer={spice.answer}></Card>
          </li>
        ))}
      </StyledList>
    </>
  );
}
