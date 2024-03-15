import GlobalStyle from "@/styles";
import Layout from "@/Components/Layout/Layout";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
      <Layout />
    </>
  );
}
