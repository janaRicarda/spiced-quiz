import CardForm from "@/Components/CardForm/CardForm";
import Head from "next/head";

import styled from "styled-components";

const StyledSection = styled.section`
  width: 100%;
  height: calc(100vh - 223px);
  //margin-top: 123px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default function AddingPage({ handleSubmit }) {
  return (
    <>
      <Head>
        <title>adding page</title>
      </Head>
      <StyledSection>
        <CardForm handleSubmit={handleSubmit} value="" />
      </StyledSection>
    </>
  );
}
