import styled from "styled-components";

export const StyledCard = styled.article`
  border-radius: 12px;
  border: 1px solid var(--color2);
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

  font-size: 2rem;
  border: 1px solid var(--color2);
  border-radius: 50%;
  background-color: ${({ $isBookmarked }) =>
    $isBookmarked ? "var(--color1)" : "var(--color2)"};
  position: absolute;
  top: -15px;
  right: -10px;
`;

export const StyledAnswerButton = styled.button`
  border-style: none;
  padding: 1rem;
  border-radius: 6px;
  border: 1px solid var(--color1);
  background-color: var(--color1);
  color: var(--color-font);
  &:hover {
    background-color: var(--color2);
    color: var(--color-font);
  }
`;
