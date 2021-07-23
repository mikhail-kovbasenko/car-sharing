import './Content.scss';
import { Route, Switch } from 'react-router';
import React from 'react';
import Order from './Order/Order';
import MainPage from './MainPage';

const Content = () => {
	return (
		<div className="content">
			<Switch>
				<Route exact path="/" render={MainPage}/>
				<Route path="/order" component={Order}/>
			</Switch>
		</div>
	)
}

export default Content;