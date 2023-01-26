import { ThemeProvider } from "styled-components"
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router"
import { GlobalStyle } from "./styles/GlobalStyle";
import { theme } from "./styles/theme"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <BrowserRouter>
        <Router/>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
