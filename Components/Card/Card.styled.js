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
  border-style: none;
  background-color: transparent;

  font-size: 2rem;
  border: 1px solid var(--color-font);
  border-radius: 50%;
  background-color: ${({ $bookmark }) => ($bookmark ? "black" : "white")};

  position: absolute;
  top: -15px;
  right: -10px;
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
