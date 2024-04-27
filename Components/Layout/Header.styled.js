import styled from "styled-components";

export const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  z-index: 1;
  background-color: var(--color1);
  width: 100%;
  text-align: center;
  padding: 0;
  border-bottom: 1px solid var(--color-font);
`;

export const StyledH1 = styled.h1`
  font-size: 4rem;
  margin-bottom: 0.7rem;
  margin-top: 0;

  color: var(--color-font);
`;
