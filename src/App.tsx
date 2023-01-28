import { ThemeProvider } from "styled-components"
import { BrowserRouter } from "react-router-dom";
import AuthContextProvider from "./context/AuthContext";
import { Router } from "./Router"
import { GlobalStyle } from "./styles/GlobalStyle";
import { theme } from "./styles/theme"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <AuthContextProvider>
        <BrowserRouter>
          <Router/>
        </BrowserRouter>
      </AuthContextProvider>
    </ThemeProvider>
  )
}

export default App
