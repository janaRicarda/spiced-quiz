import Head from "next/head";
import useSWR from "swr";
import CardList from "@/Components/CardList/CardList";
import { useRouter } from "next/navigation";

export default function Home() {
  const { data, isLoading } = useSWR("/api/spices");

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return;
  }

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <CardList data={data} />
    </>
  );
}
