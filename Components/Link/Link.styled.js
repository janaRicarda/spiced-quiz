import styled from "styled-components";
import Link from "next/link";

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: var(--color-font);

  flex: 1;
  padding: 0.5rem;
  &:hover {
    color: var(--color2);
  }
`;
