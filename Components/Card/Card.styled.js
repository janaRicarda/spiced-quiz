import styled from "styled-components";

export const StyledCard = styled.article`
  border-radius: 12px;
  //border: 1px solid var(--color-font);

  background-color: rgba(255, 255, 255, 0.15);
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);

  backdrop-filter: blur(15px);
  color: var(--font);
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
  top: -1.3rem;
  right: -1rem;
`;

export const StyledAnswerButton = styled.button`
  border-style: none;
  padding: 1rem;
  border-radius: 6px;
  border: 1px solid var(--font);
  background-color: transparent;
  color: var(--font);
  &:hover {
    background-color: var(--background);
  }
`;
