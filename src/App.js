import React from 'react';
import { Button, Grid } from '@material-ui/core';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Home from './components/home';
import Page1 from './components/page1';
import Page2 from './components/page2';


function App() {
	return (
		<Router>
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/page1" exact component={Page1} />
				<Route path="/page2" exact component={Page2} />
			</Switch>
		</Router>
	);
}

export default App;