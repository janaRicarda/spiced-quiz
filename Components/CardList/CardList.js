import Card from "../Card/Card";
//import { useState } from "react";

import StyledList from "./StyledList";

export default function CardList({
  data,
  dataInfo,
  isBookmarked,
  handleBookmark,
  question,
  answer,
}) {
  /* const [dataInfo, setDataInfo] = useState([]);

  function handleBookmark(id) {
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

  return (
    <StyledList>
      {data.map((spice) => (
        <li key={spice._id}>
          <Card
            question={spice.question}
            answer={spice.answer}
            isBookmarked={isBookmarked}
            handleBookmark={handleBookmark}
            // dataInfo={dataInfo}
            id={`/${spice._id}`}
          ></Card>
        </li>
      ))}
    </StyledList>
  );
}

/* return (
    <StyledList>
      {data
        ? data.map((spice) => {
            const { isBookmarked } = dataInfo.find(
              (info) => info.id === spice.id
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
                  handleBookmark={handleBookmark}
                ></Card>
              </li>
            );
          })
        : null}
    </StyledList>
  );
} */
