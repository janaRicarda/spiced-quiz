import Navigation from "@/Components/Navigation";
import styled from "styled-components";

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  z-index: 1;
  background-color: var(--color1);
  width: 100%;
  text-align: center;
  padding: 0;
  border-bottom: 1px solid var(--color-font);
`;

const StyledH1 = styled.h1`
  font-family: var(--font-fat);
  font-size: 4rem;
  margin-bottom: 0.7rem;
  margin-top: 0;

  color: var(--color-font);
`;

export default function Layout() {
  return (
    <>
      <StyledHeader>
        <StyledH1>Spiced Quiz</StyledH1>
      </StyledHeader>
      <Navigation />
    </>
  );
}
