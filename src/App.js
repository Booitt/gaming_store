import { ThemeProvider, createGlobalStyle } from "styled-components";
import HomePage from "./Pages/HomePage";

const theme = {
	colors: {
    background: "#211522",
    text: "white",
    red: "#DB1F48",    
  }
};

const GlobalStyle = createGlobalStyle`
    html { font-size: 10px; }

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body {
        background-color: ${theme.colors.background};
        color: ${theme.colors.text};
    }
`;

function App() {
	return (
		<>
			<GlobalStyle />
			<ThemeProvider theme={theme}>
        <HomePage />
			</ThemeProvider>
		</>
	);
}

export default App;
