import styled from "styled-components";
import Sun from "../icons/sun.svg";
import Moon from "../icons/moon.svg";
import { lightTheme } from "./Theme";

const StyledButton = styled.button`
  border-style: none;
  background: transparent;
  position: fixed;
  top: 0;
  right: 0;
  margin: 0.5rem;
`;

const StyledSun = styled(Sun)`
  width: 1.5rem;
  height: 1.5rem;
  fill: var(--font);
`;

const StyledMoon = styled(Moon)`
  width: 1.5rem;
  height: 1.5rem;
  fill: var(--font);
`;

export default function Toggle({ theme, handleToggleTheme }) {
  return (
    <StyledButton onClick={handleToggleTheme}>
      {theme === lightTheme ? <StyledMoon /> : <StyledSun />}
    </StyledButton>
  );
}
