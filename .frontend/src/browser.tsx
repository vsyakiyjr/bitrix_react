import * as React from 'react';
import ReactDOM from 'react-dom';
import {getHydrateData} from "~utils/hydrateData";
import {AppContainer} from "~components/App/App";
import {ready} from "~utils/ready";
import store from "./store/store";
import { Provider } from "react-redux";

ready(() => {
	const $root = document.getElementById('root');
	const hydrateData = getHydrateData();
	 
	if ($root) {
		const rootContent = $root.innerHTML.trim();
		if (hydrateData && rootContent) {
			ReactDOM.hydrate(			
			<Provider store={store}>
				<AppContainer hydrateData={hydrateData} />            
			</Provider>			
			, $root);
		} else {
			ReactDOM.render(		
			<Provider store={store}>
				<AppContainer />            
			</Provider>	, $root);
		}
	} else {
		console.error(`$root is null`);
	}
}); 