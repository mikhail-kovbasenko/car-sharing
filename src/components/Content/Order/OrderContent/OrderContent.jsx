import { useEffect } from 'react';
import { Switch, Route, withRouter } from 'react-router';
import Location from './Location/Location';
import ModelContainer from './Model/ModelContainer';
import ExtraContainer from './Extra/ExtraContainer';

const OrderContent = ({history}) => {
	useEffect(() => {
		const pathname = history.location.pathname;
		
		if(pathname === '/order/location') return;
		
		history.push('/order/location');
	}, [])
	return (
		<div className="order__forms">
			<Switch>
				<Route path="/order/location" component={Location} />
				<Route path="/order/model" component={ModelContainer}/>
				<Route path="/order/extra" component={ExtraContainer}/>
				<Route path="/order/total" />
			</Switch>
		</div>
	)
}

export default withRouter(OrderContent);