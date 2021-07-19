import './Content.scss';
import Main from './Main/Main';
import SliderContainer from './Slider/SliderContainer';
import { Route, Switch } from 'react-router';
import React from 'react';
import Order from './Order/Order';

const Content = () => {
	const getMainPage = () => {
		return (
			<React.Fragment>
				<Main/>
				<SliderContainer/>
			</React.Fragment>
		)
	}
	return (
		<div className="content">
			<Switch>
				<Route exact path="/" render={getMainPage}/>
				<Route path="/order" component={Order}/>
			</Switch>
		</div>
	)
}

export default Content;