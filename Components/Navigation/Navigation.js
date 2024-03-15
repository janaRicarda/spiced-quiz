import Link from "next/link";
import styled from "styled-components";

const StyledFooter = styled.footer`
  position: fixed;
  bottom: 0;
  z-index: 1;
  background-color: white;
  border-bottom: 1px solid black;
  width: 100%;
  text-align: center;
  display: flex;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: hotpink;
  flex: 1;
  padding: 1.5rem;
  &:hover {
    color: pink;
  }
`;

export default function Navigation() {
  return (
    <StyledFooter>
      <StyledLink href="/">Home</StyledLink>
      <StyledLink href="/bookmarked">Bookmarked</StyledLink>
      <StyledLink href="/add">Add</StyledLink>
    </StyledFooter>
  );
}
