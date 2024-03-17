import { useRouter } from "next/router";
import useSWR from "swr";
import styled from "styled-components";
import { StyledLink } from "../Link/Link.styled";

const StyledArticle = styled.article`
  border-radius: 12px;
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
const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 1rem;
  padding-bottom: 1rem;
  border-top: 1px solid var(--color-font);
  position: absolute;
  bottom: 0;
`;

export default function SpiceDetails() {
  const router = useRouter();
  const { id } = router.query;
  const { data, isLoading } = useSWR(`/api/spices/${id}`);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (!data) {
    return;
  }
  return (
    <>
      <StyledArticle>
        <StyledH1>{data.answer}</StyledH1>
        <p> hier könnte ein Text über {data.answer} stehen...</p>
        <StyledDiv>
          <StyledLink href="/quiz">← Go back to quiz</StyledLink>
          <StyledLink href="/add">Add a new spiced question →</StyledLink>
        </StyledDiv>
      </StyledArticle>
    </>
  );
}
