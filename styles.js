import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*,
*::before,
*::after {
  box-sizing: border-box;
}
:root {
  --color1: darkorchid;
  --color2: yellow;
}
body {
    margin: 0;
  font-family: system-ui;
  background-image: linear-gradient(darkorchid, yellow);
  background-repeat: no-repeat;
  
  height: 100vh;
  
}
`;
