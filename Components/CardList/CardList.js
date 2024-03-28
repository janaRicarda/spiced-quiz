import Card from "../Card/Card";

import StyledList from "./StyledList";

export default function CardList({ spices, spicesInfo, toggleBookmark }) {
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

/*  return (
    <StyledList>
      {spices.map((spice) => {
        const { isBookmarked } = spicesInfo.find(
          (info) => info.id === spice._id
        ) ?? {
          isBookmarked: false,
        };
        return (
          <li key={spice._id}>
            <Card
              question={spice.question}
              answer={spice.answer}
              id={spice._id}
              isBookmarked={spice.isBookmarked}
              handleBookmark={handleBookmark}
            ></Card>
          </li>
        );
      })}
    </StyledList>
  );
}
 */
