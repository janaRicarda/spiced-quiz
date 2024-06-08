import CardForm from "@/Components/CardForm/CardForm";
import Head from "next/head";
import { useRouter } from "next/router";
import useSWR from "swr";
import styled from "styled-components";

const fetcher = (url) => fetch(url).then((response) => response.json());

const StyledSection = styled.section`
  width: 100%;
  height: calc(100vh - 223px);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default function AddingPage() {
  const { data, isLoading, mutate } = useSWR("/api/spices", fetcher);
  const router = useRouter();

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
      router.push("/spices");
    }
  }

  return (
    <>
      <Head>
        <title>adding page</title>
      </Head>
      <StyledSection>
        <CardForm onSubmit={handleSubmit} value="" />
      </StyledSection>
    </>
  );
}
