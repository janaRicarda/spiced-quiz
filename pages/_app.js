import GlobalStyle from "@/styles";
import { SWRConfig } from "swr";
import useSWR from "swr";
import { useState } from "react";
import { useRouter } from "next/router";

const fetcher = (url) => fetch(url).then((response) => response.json());

export default function App({ Component, pageProps }) {
  const [dataInfo, setDataInfo] = useState([]);
  /* const router = useRouter();
  const { id } = router.query; */
  const { data, isLoading } = useSWR("/api/spices");

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  // if (!data) {
  //   console.log(data);
  //   return;
  // }

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
  }

  const bookmarkedSpices = data
    ? data.map((spice) => {
        const { isBookmarked } = dataInfo.find(
          (info) => info.id === spice.id
        ) ?? {
          isBookmarked: false,
        };
      })
    : null;

  return (
    <SWRConfig value={{ fetcher }}>
      <GlobalStyle />
      <Component
        data={data}
        dataInfo={dataInfo}
        handleBookmark={handleBookmark}
        isBookmarked
        bookmarkedSpices={bookmarkedSpices}
        {...pageProps}
      />
    </SWRConfig>
  );
}
