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
  --color1: #864CFF;
  --color2: #FD7400;
  --color-font: #412A8C;
  --font-fat: ${abrilFatface.style.fontFamily};
}
body {
    margin: 0;
  font-family: ${albertSans.style.fontFamily};
  background-image: linear-gradient(var(--color1), var(--color2));
  background-repeat: no-repeat;
  height: 100%;
  
  
  
  
}
`;
