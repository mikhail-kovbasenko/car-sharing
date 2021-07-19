import './Order.scss';
import Header from '../../../commons/Header/Header';
import OrderTotalContainer from './OrderTotal/OrderTotalContainer';
import OrderContent from './OrderContent/OrderContent';
import OrderNavigationContainer from './OrderNavigation/OrderNavigationContainer';

const Order = () => {
	return (
		<div className="order">
			<div className="order__container">
				<Header/>
				<OrderNavigationContainer/>
				<div className="order__content">
					<OrderContent/>
					<OrderTotalContainer/>
				</div>
			</div>
		</div>
	)
}

export default Order;