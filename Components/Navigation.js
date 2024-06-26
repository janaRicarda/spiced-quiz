import { StyledLink } from "@/Components/StyledLink";
import styled from "styled-components";
import Home from "../icons/home.svg";
import Chilli from "../icons/chilli.svg";
import Plus from "../icons/plus.svg";

const StyledFooter = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 1;
  background: var(--background);
  width: 100%;
  height: 6rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NavLink = styled(StyledLink)`
  height: 6rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: var(--accent);
    color: var(--font);
  }
`;

const StyledHome = styled(Home)`
  width: 2.5rem;
  height: 2.5rem;
  fill: var(--font);
`;

const StyledChilli = styled(Chilli)`
  width: 2.5rem;
  height: 2.5rem;
  fill: var(--font);
`;

const StyledPlus = styled(Plus)`
  width: 2.5rem;
  height: 2.5rem;
  fill: var(--font);
`;

const StyledP = styled.p`
  font-size: 0.8rem;
  height: 0.8rem;
  color: var(--font);
`;

export default function Navigation() {
  return (
    <StyledFooter>
      <NavLink href="/spices">
        <StyledHome />
        <StyledP>Quiz</StyledP>
      </NavLink>
      <NavLink href="/bookmarked">
        <StyledChilli />
        <StyledP>Bookmarks</StyledP>
      </NavLink>
      <NavLink href="/add">
        <StyledPlus />
        <StyledP>Add</StyledP>
      </NavLink>
    </StyledFooter>
  );
}
