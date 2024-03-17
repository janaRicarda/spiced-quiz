import CardForm from "@/Components/CardForm/CardForm";
import Head from "next/head";
import Layout from "@/Components/Layout/Layout";

export default function AddingPage() {
  return (
    <>
      <Head>
        <title>adding page</title>
      </Head>
      <CardForm />
      <Layout />
    </>
  );
}
