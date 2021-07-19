import { useEffect } from 'react';
import { Switch, Route, withRouter } from 'react-router';
import ModelContainer from './Model/ModelContainer';
import ExtraContainer from './Extra/ExtraContainer';
import LocationContainer from './Location/LocationContainer';
import TotalContainer from './Total/TotalContainer';

const OrderContent = ({history}) => {
	useEffect(() => {
		const pathname = history.location.pathname;
		
		if(pathname === '/order/location') return;
		
		history.push('/order/location');
	}, [])
	return (
		<div className="order__forms">
			<Switch>
				<Route path="/order/location" component={LocationContainer} />
				<Route path="/order/model" component={ModelContainer}/>
				<Route path="/order/extra" component={ExtraContainer}/>
				<Route path="/order/total" component={TotalContainer}/>
			</Switch>
		</div>
	)
}

export default withRouter(OrderContent);