import { useSelector } from "react-redux";
import OrderNavigation from "./OrderNavigation";

const OrderNavigationContainer = () => {
	const navItems = useSelector(state => state.order.navItems);
	const completed = useSelector(state => state.order.completed);
	const orderNumber = useSelector(state => state.order.orderNumber);

	return <OrderNavigation items={navItems} completed={completed} orderNumber={orderNumber}/>
}

export default OrderNavigationContainer;