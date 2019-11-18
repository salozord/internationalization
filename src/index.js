import React from "react";
import ReactDOM from "react-dom";
import {IntlProvider} from 'react-intl';

import JobsList from "./components/jobsList";

import localeEsMessages from "./locales/es";
import localeEnMessages from "./locales/en";

let getlocales = () => {
	let navLanguage = navigator.language || navigator.userLanguage;
	let locales = localeEnMessages;
	if(navLanguage.includes('es')) {
		locales = localeEsMessages;
	}
	return locales;
};

ReactDOM.render(
	<IntlProvider locale={navigator.language} messages={getlocales()}>
		<JobsList/>
	</IntlProvider>, document.getElementById("root")
);