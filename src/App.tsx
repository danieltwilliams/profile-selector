import { BrowserRouter, Route, Switch } from "react-router-dom";
import theme from "./theme";
import GlobalStyle from "./theme/globalStyles";
import { ThemeProvider } from "styled-components";
import Container from "./layout/main";

import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Container>
          <BrowserRouter>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route component={NotFound} />
            </Switch>
          </BrowserRouter>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
