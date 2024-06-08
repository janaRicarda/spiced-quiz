import { useRouter } from "next/router";
import useSWR from "swr";
import styled from "styled-components";
import { StyledLink } from "../Link/Link.styled";
import Spice from "@/db/models/Spice";
import CardForm from "../CardForm/CardForm";

const StyledArticle = styled.article`
  border-radius: 12px;
  border: 1px solid var(--color-font);
  background-color: white;
  color: var(--color-font);
  font-weight: bold;
  padding: 1.5rem;
  margin: 1.5rem;
  height: 95vh;
  width: auto;
  position: relative;
`;

const StyledH1 = styled.h1`
  font-family: var(--font-fat);
  font-size: 2rem;
`;
const StyledButtonDiv = styled.div`
  display: flex;
  gap: 0.5rem;
  position: absolute;
  top: 0;
  right: 0;
`;
const StyledButton = styled.button`
  border-radius: 6px;
  color: var(--color-font);
  padding: 0.5rem;
  font-size: 1.3rem;
  background-color: white;
  border-style: none;
  &:hover {
    background-color: var(--color1);
  }
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 1rem;
  padding-bottom: 1rem;
  border-top: 1px solid var(--color-font);
  position: absolute;
  bottom: 0;
`;

const StyledP = styled.p``;

export default function SpiceDetails({ data }) {
  /* const router = useRouter();
  const { id } = router.query;
  const { data, isLoading } = useSWR(`/api/spices/${id}`); */

  /* if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (!data) {
    return;
  } */

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
      {/*  <StyledArticle>
        <StyledH1>{data.answer}</StyledH1>
        <p> hier könnte ein Text über {data.answer} stehen...</p>
        <StyledButtonDiv>
          <StyledButton type="button">Edit</StyledButton>
          <StyledButton type="button">Delete</StyledButton>
        </StyledButtonDiv>
        <StyledDiv>
          <StyledLink href="/quiz">← Go back to quiz</StyledLink>
          <StyledLink href="/add">Add a new spiced question →</StyledLink>
        </StyledDiv>
      </StyledArticle> */}
    </>
  );
}
