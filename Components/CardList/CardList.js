import Card from "../Card/Card";

import StyledList from "./StyledList";

export default function CardList({ spices, handleBookmark }) {
  return (
    <StyledList>
      {spices.map((spice) => (
        <li key={spice._id}>
          <Card
            question={spice.question}
            answer={spice.answer}
            isBookmarked={spice.isBookmarked}
            handleBookmark={handleBookmark}
            // id={`/${spice._id}`}
            id={spice._id}
          />
        </li>
      ))}
    </StyledList>
  );
}

/* return (
    <StyledList>
      {spices.map((spice) => {
        const { isBookmarked } = dataInfo.find(
          (info) => info.id === spice._id
        ) ?? {
          isBookmarked: false,
        };
        return (
          <li key={spice._id}>
            <Card
              question={spice.question}
              answer={spice.answer}
              id={`/${spice._id}`}
              isBookmarked={isBookmarked}
              onHandleBookmark={onHandleBookmark}
            ></Card>
          </li>
        );
      })}
    </StyledList>
  );
} */
