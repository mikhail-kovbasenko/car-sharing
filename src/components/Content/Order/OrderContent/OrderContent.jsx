import { Switch, Route } from 'react-router';
import Location from './../OrderContent/Location/Location';

const OrderContent = () => {
	return (
		<div className="order__forms">
			<Switch>
				<Route path="/order/location" component={Location} />
				<Route path="/order/modal" />
				<Route path="/order/extra" />
				<Route path="/order/total" />
			</Switch>
		</div>
	)
}

export default OrderContent;