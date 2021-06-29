import './Order.scss';
import Order from './Order';
import { connect } from 'react-redux';

const OrderContainer = ({navItems}) => {
	return <Order navItems={navItems}/>
}

const mapStateToProps = state => {
	return {
		navItems: state.order.navItems
	}
}

export default connect(mapStateToProps)(OrderContainer);