import React from 'react';
import ReactDOM from 'react-dom';
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from "react-router-dom";

import App from './components/App';

ReactDOM.render((
	<Router>
		<Switch>
			<Route path="/" component={App} />
		</Switch>
	</Router>
), document.getElementById('root'));
