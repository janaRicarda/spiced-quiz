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
  --color1: #C0BCEB;
  --color2: #E59023;
  --color-font: #412A8C;
  --main-bright: ${({ theme }) => theme.mainBright};
  --background: ${({ theme }) => theme.background};
  --font: ${({ theme }) => theme.text};
  --accent: ${({ theme }) => theme.accent};
  --font-fat: ${abrilFatface.style.fontFamily};
}
body {
    margin: 0;
    padding: 90px 0;
  font-family: ${albertSans.style.fontFamily};
  background-color: var(--main-bright);

  //background-repeat: no-repeat;
  height: 100%;  
  width: 100%;
  display: flex;
  felx-direction: column;
  justify-content: center;
  align-items: center;

 
    //background-color: hsla(298, 73%, 89%, 1);
    //background-image: radial-gradient(circle at 31% 28%, hsla(355, 97%, 82%, 1) 8%, transparent 58%), radial-gradient(circle at 82% 13%, hsla(316, 92%, 73%, 1) 10%, transparent 63%), radial-gradient(circle at 81% 24%, hsla(62, 61%, 52%, 1) 6%, transparent 59%), radial-gradient(circle at 24% 94%, hsla(266, 69%, 90%, 1) 8%, transparent 50%), radial-gradient(circle at 14% 68%, hsla(209, 87%, 73%, 1) 16%, transparent 87%);
    //background-blend-mode: normal, normal, normal, normal, normal;

}


`;
