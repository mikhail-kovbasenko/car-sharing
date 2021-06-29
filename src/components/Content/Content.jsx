import './Content.scss';
import Main from './Main/Main';
import SliderContainer from './Slider/SliderContainer';
import { Route, Switch } from 'react-router';
import React from 'react';
import OrderContainer from './Order/OrderContainer';

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
				<Route  exact path="/" render={getMainPage}/>
				<Route  exact path="/order/location" component={OrderContainer}/>
			</Switch>
		</div>
	)
}

export default Content;