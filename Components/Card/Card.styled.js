import styled from "styled-components";

export const StyledCard = styled.article`
  border-radius: 12px;
  border: 1px solid var(--color-font);
  background-color: white;
  color: var(--color-font);
  font-weight: bold;
  padding: 1.5rem;
  margin: 2rem;
  height: 40%;
  width: auto;
  text-align: center;
  position: relative;
`;

export const StyledBookmarkButton = styled.button`
  background-color: transparent;
  border-style: none;
  position: absolute;
  top: -70px;
  right: -80px;
`;

export const StyledAnswerButton = styled.button`
  border-style: none;
  padding: 1rem;
  border-radius: 6px;
  border: 1px solid var(--color-font);
  background-color: white;
  color: var(--color-font);
  &:hover {
    background-color: var(--color1);
  }
`;
