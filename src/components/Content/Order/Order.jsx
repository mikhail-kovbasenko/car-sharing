import './Order.scss';
import Header from '../../../commons/Header/Header';
import OrderNavigation from './OrderNavigation/OrderNavigation';
import OrderTotalContainer from './OrderTotal/OrderTotalContainer';
import OrderContent from './OrderContent/OrderContent';

const Order = ({navItems}) => {
	return (
		<div className="order">
			<div className="order__container">
				<Header/>
				<OrderNavigation items={navItems}/>
				<div className="order__content">
					<OrderContent/>
					<OrderTotalContainer/>
				</div>
			</div>
		</div>
	)
}

export default Order;