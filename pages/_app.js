import GlobalStyle from "@/styles";
import { SWRConfig } from "swr";
import useSWR from "swr";
import { useState } from "react";
import { useRouter } from "next/router";
import LoadingSpinner from "@/Components/Loading/index ";
import useLocalStorageState from "use-local-storage-state";

const fetcher = (url) => fetch(url).then((response) => response.json());

/* async function fetcher(url) {
  const response = await fetch(url);

  if (!response) {
    const error = new Error(`An error occured...`);
    error.info = await response.json();
    error.status = response.status;
    throw error;
  }

  return response.json();
} */

export default function App({ Component, pageProps }) {
  const { data, isLoading, mutate } = useSWR("/api/spices", fetcher);
  const router = useRouter();

  const [spicesInfo, setSpicesInfo] = useLocalStorageState("spicesInfo", {
    defaultValue: [],
  });

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

  let updatedSpices = spicesInfo.length ? spicesInfo : data;
  console.log(updatedSpices);
  console.log(data);

  function toggleBookmark(id) {
    setSpicesInfo(
      updatedSpices.map((spice) =>
        spice._id === id
          ? { ...spice, isBookmarked: !spice.isBookmarked }
          : spice
      )
    );
  }

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
        //data={data}
        data={updatedSpices}
        toggleBookmark={toggleBookmark}
        handleSubmit={handleSubmit}
        {...pageProps}
      />
    </SWRConfig>
  );
}
