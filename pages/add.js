import CardForm from "@/Components/CardForm";
import Head from "next/head";
import { useRouter } from "next/router";
import useSWR from "swr";
import styled from "styled-components";

const StyledSection = styled.section`
  width: 100%;
  height: calc(100vh - 223px);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default function AddingPage() {
  const { mutate } = useSWR("/api/spices");
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
      mutate();
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
