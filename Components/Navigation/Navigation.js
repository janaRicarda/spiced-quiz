import { StyledLink } from "../Link/Link.styled";
import { StyledFooter } from "./Footer.styled";

export default function Navigation() {
  return (
    <StyledFooter>
      <StyledLink href="/spices">Quiz</StyledLink>
      <StyledLink href="/bookmarked">Bookmarked</StyledLink>
      <StyledLink href="/add">Add</StyledLink>
    </StyledFooter>
  );
}
