import ReactDOM from 'react-dom';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Provider from 'react-redux';
import {store, history} from './store';

import App from './components/App';

ReactDOM.render((
    <Router>
      <Switch>
        <Route path="/" component={App} />
      </Switch>
    </Router>

), document.getElementById('root'));