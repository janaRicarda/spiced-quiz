import { StyledLink } from "@/Components/Link/Link.styled";
import styled from "styled-components";

const StyledFooter = styled.footer`
  position: fixed;
  bottom: 0;
  z-index: 1;
  background-color: var(--color1);
  border-top: 1px solid var(--color-font);
  width: 100%;
  text-align: center;
  display: flex;
`;

const NavLink = styled(StyledLink)`
  flex: 1;
  padding-top: 1rem;
  padding-bottom: 1rem;
  &:hover {
    background-color: lightsalmon;
    color: var(--color-font);
  }
`;

export default function Navigation() {
  return (
    <StyledFooter>
      <NavLink href="/spices">Quiz</NavLink>
      <NavLink href="/bookmarked">Bookmarked</NavLink>
      <NavLink href="/add">Add</NavLink>
    </StyledFooter>
  );
}
