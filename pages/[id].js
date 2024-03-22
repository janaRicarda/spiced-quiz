//import SpiceDetails from "@/Components/SpiceDetail/SpiceDetail";
import { useRouter } from "next/router";
import useSWR from "swr";
import styled from "styled-components";
import { StyledLink } from "@/Components/Link/Link.styled";
import CardForm from "@/Components/CardForm/CardForm";
import { useState } from "react";

const StyledArticle = styled.article`
  border-radius: 12px;
  border: 1px solid var(--color-font);
  background-color: white;
  color: var(--color-font);
  font-weight: bold;
  padding: 2rem;
  margin: 2rem;

  width: auto;
  position: relative;
`;

const StyledH1 = styled.h1`
  font-family: var(--font-fat);
  font-size: 2rem;
`;
const StyledP = styled.p`
  padding-bottom: 2rem;
  margin-bottom: 4rem;
`;

const StyledButtonDiv = styled.div`
  display: flex;
  gap: 0.2rem;
  position: absolute;
  top: 1%;
  right: 1%;
`;
const StyledButton = styled.button`
  border-style: none;
  border-radius: 6px;
  border: 1px solid var(--color-font);
  color: var(--color-font);
  padding: 0.5rem;
  font-size: 1rem;
  background-color: white;

  &:hover {
    background-color: var(--color1);
  }
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 2rem;
  padding-top: 0;
  padding-bottom: 1rem;

  position: absolute;
  bottom: 0;
  right: 0;
`;

export default function DetailPage() {
  const [isEditMode, setIsEditMode] = useState(false);
  const router = useRouter();
  const { id } = router.query;
  const { data, isLoading, mutate } = useSWR(`/api/spices/${id}`);

  async function handleEdit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const spiceData = Object.fromEntries(formData);

    const response = await fetch(`/api/spices/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(spiceData),
    });

    if (response.ok) {
      mutate();
    }
  }

  async function handleDelete(id) {
    const response = await fetch(`/api/spices/${id}`, {
      method: "DELETE",
    });
    if (response.ok) {
      router.push("/quiz");
    }
    if (!response.ok) {
      console.log(response.status);
    }
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (!data) {
    return;
  }

  return (
    <>
      <StyledArticle>
        <StyledLink href="/quiz">← Go back to quiz</StyledLink>
        <StyledH1>{data.answer}</StyledH1>
        <StyledP> hier könnte ein Text über {data.answer} stehen...</StyledP>
        <StyledButtonDiv>
          <StyledButton
            type="button"
            onClick={() => {
              setIsEditMode(!isEditMode);
            }}
          >
            Edit
          </StyledButton>
          <StyledButton type="button" onClick={() => handleDelete(id)}>
            Delete
          </StyledButton>
        </StyledButtonDiv>
        <StyledDiv>
          <StyledLink href="/add">Add a new spiced question →</StyledLink>
        </StyledDiv>
      </StyledArticle>
      {isEditMode && (
        <CardForm onSubmit={handleEdit} value={data} isEditMode={true} />
      )}
    </>
  );
}
