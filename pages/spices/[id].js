import { useRouter } from "next/router";
import useSWR from "swr";
import styled from "styled-components";
import CardForm from "@/Components/CardForm";
import { useState } from "react";
import LoadingSpinner from "@/Components/LoadingSpinner";

const StyledSection = styled.section`
  height: calc(100vh - 223px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledArticle = styled.article`
  border-radius: 12px;
  border: 1px solid var(--font);
  background-color: var(--section-background);
  color: var(--font);
  font-weight: bold;
  padding: 2rem;
  margin: 0 4rem 0 4rem;
  width: 70vw;
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
  right: 0.7%;
`;
const StyledButton = styled.button`
  border-style: none;
  border-radius: 7px;
  border: 1px solid var(--font);
  color: var(--font);
  padding: 0.5rem;
  font-size: 1rem;
  background-color: var(--background);

  &:hover {
    background-color: var(--accent);
  }
`;

export default function DetailPage() {
  const [isEditMode, setIsEditMode] = useState(false);
  const router = useRouter();
  const { isReady } = router;
  const { id } = router.query;

  const { data, isLoading, mutate, error } = useSWR(`/api/spices/${id}`);

  if (!isReady || isLoading || error) return <LoadingSpinner />;

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
      router.push("/spices");
    }
  }

  async function handleDelete(id) {
    const response = await fetch(`/api/spices/${id}`, {
      method: "DELETE",
    });
    if (response.ok) {
      router.push("/spices");
      mutate();
    }
  }

  return (
    <StyledSection>
      <StyledArticle>
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
      </StyledArticle>
      {isEditMode && (
        <CardForm onSubmit={handleEdit} value={data} isEditMode={true} />
      )}
    </StyledSection>
  );
}
