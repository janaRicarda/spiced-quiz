import GlobalStyle from "@/styles";
import { SWRConfig } from "swr";
import useSWR from "swr";
//import { useState } from "react";
import { useRouter } from "next/router";
import LoadingSpinner from "@/Components/Loading/index ";
import useLocalStorageState from "use-local-storage-state";

const fetcher = (url) => fetch(url).then((response) => response.json());

export default function App({ Component, pageProps }) {
  const router = useRouter();
  //const [dataInfo, setDataInfo] = useState([]);
  const [dataInfo, setDataInfo] = useLocalStorageState("dataInfo", {
    defaultValue: [],
  });

  const { data, isLoading, mutate } = useSWR("/api/spices", fetcher);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (!data) {
    console.log(data);
    return;
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const spiceData = Object.fromEntries(formData);

    const response = await fetch("/api/spices", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(spiceData),
    });

    if (response.ok) {
      mutate();
      router.push("/spices");
    }
  }

  function handleBookmark(id) {
    console.log("bookmark");
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
    <SWRConfig
      value={{
        fetcher: async (...args) => {
          const response = await fetch(...args);
          if (!response.ok) {
            throw new Error(`Request with ${JSON.stringify(args)} failed.`);
          }
          return await response.json();
        },
      }}
    >
      <GlobalStyle />
      <Component
        data={data}
        dataInfo={dataInfo}
        handleBookmark={handleBookmark}
        isBookmarked
        bookmarkedSpices={bookmarkedSpices}
        handleSubmit={handleSubmit}
        {...pageProps}
      />
    </SWRConfig>
  );
}
