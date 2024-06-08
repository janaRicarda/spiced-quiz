import GlobalStyle from "@/styles";
import { ThemeProvider } from "styled-components";
import { SWRConfig } from "swr";
import useSWR from "swr";
import { useState } from "react";
import LoadingSpinner from "@/Components/Loading/index ";
import useLocalStorageState from "use-local-storage-state";
import Layout from "@/Components/Layout";
import { lightTheme, darkTheme } from "@/Components/Theme";

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
  const [theme, setTheme] = useState(lightTheme);
  const { data, isLoading, mutate } = useSWR("/api/spices", {
    fallbackData: [],
  });

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

  function handleToggleTheme() {
    theme === lightTheme ? setTheme(darkTheme) : setTheme(lightTheme);
  }

  let updatedSpices = spicesInfo.length ? spicesInfo : data;

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
    <ThemeProvider theme={theme}>
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
        <Layout theme={theme} handleToggleTheme={handleToggleTheme}>
          <Component
            data={updatedSpices}
            toggleBookmark={toggleBookmark}
            {...pageProps}
          />
        </Layout>
      </SWRConfig>
    </ThemeProvider>
  );
}
