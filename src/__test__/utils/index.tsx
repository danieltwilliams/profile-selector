import { ThemeProvider } from "styled-components";

import { render } from "@testing-library/react";
import theme from "../../theme";

export const renderWithTheme = (tree: any) =>
  render(<ThemeProvider theme={theme}>{tree}</ThemeProvider>);
