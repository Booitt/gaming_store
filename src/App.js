import { useState } from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import HomePage from "./pages/HomePage";

const theme = {
	colors: {
		background: "black",
		text: "white",
		navbar: "white",
		navbarMainText: "#DB1F48",
		red: "#DB1F48",
		navbarSecondaryText: "#A8999C",
		offersBackground: "white",
		buttonText: "#DB1F48",
		grey: "#A8999C",
	},
	sections: {
		maxWidth: "1500px",
	},
};

const GlobalStyle = createGlobalStyle`
    html { 
      font-size: 10px; 
      scroll-behavior: smooth;
      overflow: ${({ isOverflowHidden }) =>
			isOverflowHidden ? "hidden" : "initial"};
    }

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    a {
      text-decoration: none;
    }

    body {
        background-color: ${theme.colors.background};
        color: ${theme.colors.text};
    }
`;

function App() {
	const [isOverflowHidden, setOverflowHidden] = useState();

	return (
		<>
			<GlobalStyle isOverflowHidden={isOverflowHidden} />
			<ThemeProvider theme={theme}>
				<HomePage setOverflowHidden={setOverflowHidden}/>
			</ThemeProvider>
		</>
	);
}

export default App;
