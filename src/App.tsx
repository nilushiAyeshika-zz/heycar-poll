import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import Main from './containers/Common/Main/Main';

import { appTheme } from "./theme/Theme";
import GlobalStyles from "./theme/GlobalStyles";

import './App.css';

function App() {
	const browserHistory = createBrowserHistory();

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
