import { createGlobalStyle } from "styled-components";
import { Abril_Fatface } from "next/font/google";
import { Albert_Sans } from "next/font/google";

const abrilFatface = Abril_Fatface({ subsets: ["latin"], weight: ["400"] });
const albertSans = Albert_Sans({ subsets: ["latin"] });

export default createGlobalStyle`
*,
*::before,
*::after {
  box-sizing: border-box;
}
:root {
 --main-bright: ${({ theme }) => theme.mainBright};
  --background: ${({ theme }) => theme.background};
  --section-background:  ${({ theme }) => theme.sectionBackground};
  --font: ${({ theme }) => theme.text};
  --accent: ${({ theme }) => theme.accent};
  --font-fat: ${abrilFatface.style.fontFamily};
}
body {
  margin: 0;
  padding: 90px 0;
  font-family: ${albertSans.style.fontFamily};
  background-color: var(--main-bright);
  color: var(--font);
  //height: 100%;  
  //width: 100%;
  display: flex;
  felx-direction: column;
  justify-content: center;
  align-items: center;
}
`;
