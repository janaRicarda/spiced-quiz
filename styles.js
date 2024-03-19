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
  --color1: #C49EEB;
  --color2: #E59023;
  --color-font: #412A8C;
  --font-fat: ${abrilFatface.style.fontFamily};
}
body {
    margin: 0;
  font-family: ${albertSans.style.fontFamily};
  background-image: linear-gradient(lightsalmon, gold);
  background-repeat: no-repeat;
  height: 100%;
  
  
  
  
}
`;
