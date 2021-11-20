import React from 'react';
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router } from 'react-router-dom';

import Main from './containers/Common/Main/Main';

import { appTheme } from "./theme/Theme";
import GlobalStyles from "./theme/GlobalStyles";

import './App.css';

function App() {
  return (
    <ThemeProvider theme={appTheme}>
			{/* <Toast /> */}
			{/* {initialized && <Routes />} */}
			<GlobalStyles />
			<link
				type="text/css"
				href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
				rel="stylesheet"
			></link>
			<Router>
        <Main />
      </Router>
		</ThemeProvider>
  );
}

export default App;
