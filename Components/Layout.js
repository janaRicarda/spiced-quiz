import Navigation from "@/Components/Navigation";
import Header from "./Header";
import styled from "styled-components";

const StyledButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
`;

export default function Layout({ children, theme, handleToggleTheme }) {
  return (
    <>
      <Header theme={theme} handleToggleTheme={handleToggleTheme} />

      {children}
      <Navigation />
      <StyledButton onClick={handleToggleTheme}>☽</StyledButton>
    </>
  );
}
