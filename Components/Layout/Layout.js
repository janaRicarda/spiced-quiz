import styled from "styled-components";
import Navigation from "../Navigation/Navigation";

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  z-index: 1;
  background-color: white;
  color: hotpink;
  width: 100%;
  text-align: center;
`;

export default function Layout() {
  return (
    <>
      <StyledHeader>
        <h1>SPICED QUIZ</h1>
      </StyledHeader>
      <Navigation />
    </>
  );
}
