import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './Header';
import Home from './Home';
import Courses from './Courses'

class App extends React.Component {
	render() {
		return (
			<div>
				<Header user="Hello!" />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/courses" component={Courses} />
				</Switch>
			</div>
		);
	}
}

export default App;