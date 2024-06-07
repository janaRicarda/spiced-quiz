import styled from "styled-components";
import Image from "next/image";
import Logo from "../public/logo.jpeg";

export const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  font-size: 1.5rem;

  color: var(--color-font);
  background-color: var(--color1);
  width: 100%;
  text-align: center;
  padding: 0;
  border-bottom: 1px solid var(--color-font);
`;

const StyledLogo = styled(Image)`
  width: 450px;
  height: 120px;
  align-self: center;
`;
const StyledTitle = styled.h1`
  font-family: var(--font-fat);
  font-size: 3.5rem;
  text-align: center;
  margin: 1rem 0;
`;
const StyledSpan = styled.span`
  font-size: 1rem;
`;

export default function Header() {
  return (
    <StyledHeader>
      {/* <StyledLogo src={Logo} alt="logo" /> */}
      <StyledTitle>
        Spiced Flowers<StyledSpan>Quiz App</StyledSpan>{" "}
      </StyledTitle>
    </StyledHeader>
  );
}
