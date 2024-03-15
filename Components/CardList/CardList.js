import Card from "../Card/Card";
import styled from "styled-components";
import useSWR from "swr";

const StyledList = styled.ul`
  list-style: none;
  margin-top: 100px;
  padding-left: 0;
`;

export default function CardList() {
  const { data, isLoading } = useSWR("/api/spices");

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return;
  }

  return (
    <>
      <StyledList>
        {data.map((spice) => (
          <li key={spice._id}>
            <Card question={spice.question} answer={spice.answer}></Card>
          </li>
        ))}
      </StyledList>
    </>
  );
}
