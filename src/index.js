import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { CONFIG, VERSION } from './config/settings';
import * as serviceWorker from './serviceWorker';
import i18next from './utils/common/translation';
import { initGoogleAnalytics } from './utils/common/analytics';
import { I18nextProvider } from "react-i18next";

//version track
console.log('App Version: ' + VERSION);

if (process.env.REACT_APP_ENVIRONMENT == "production") {
	// Add Google Tag Manager to app
	initGoogleAnalytics();

	//turn off console log
	console.log = () => { };
}

ReactDOM.render(
	<BrowserRouter basename={CONFIG.BASENAME}>
		<React.StrictMode>
			<I18nextProvider i18n={i18next}>
				<App />
			</I18nextProvider>
		</React.StrictMode>
	</BrowserRouter>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
