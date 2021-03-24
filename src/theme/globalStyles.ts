import { createGlobalStyle } from "styled-components";
import theme from "./index";

export default createGlobalStyle`
    body {
      margin: 0;
      padding: 0;
      font-size: ${theme.fontSizes.base};
      font-family: Open-Sans, Helvetica, Sans-Serif;
    }
`;
