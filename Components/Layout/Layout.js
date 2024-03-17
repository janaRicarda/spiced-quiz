import Navigation from "../Navigation/Navigation";
import { StyledHeader, StyledH1 } from "./Header.styled";

export default function Layout() {
  return (
    <>
      <StyledHeader>
        <StyledH1>Spiced Quiz</StyledH1>
      </StyledHeader>
      <Navigation />
    </>
  );
}
