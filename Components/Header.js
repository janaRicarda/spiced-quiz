import styled from "styled-components";

export const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  font-size: 1.5rem;
  color: var(--font);
  background-color: var(--background);
  width: 100%;
  text-align: center;
`;

const StyledTitle = styled.h1`
  font-family: var(--font-fat);
  font-size: 2.5rem;
  text-align: center;
  margin: 1rem 0;
`;

const StyledSpan = styled.span`
  font-size: 1rem;
`;

export default function Header() {
  return (
    <StyledHeader>
      <StyledTitle>Spiced Quiz</StyledTitle>
    </StyledHeader>
  );
}
