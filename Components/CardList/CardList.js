import Card from "../Card/Card";

import StyledList from "./StyledList";

export default function CardList({ data }) {
  console.log(data);
  return (
    <>
      <StyledList>
        {data
          ? data.map((spice) => (
              <li key={spice._id}>
                <Card question={spice.question} answer={spice.answer}></Card>
              </li>
            ))
          : null}
      </StyledList>
    </>
  );
}
