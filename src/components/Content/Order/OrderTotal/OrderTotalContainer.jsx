import { connect } from "react-redux"
import { NavLink } from "react-router-dom"
import OrderTotal from "./OrderTotal"

const OrderTotalContainer = ({locationCompleted, modelCompleted}) => {
	
	const renderNextButton = (text, to) => {
		let secondClass = 'disabled';
		let completed = false;

		switch(to) {
			case 'model': completed = locationCompleted; break; 
			case 'extra': completed = modelCompleted; break;
		}

		secondClass = !completed ? secondClass : null; 

		return <NavLink to={`/order/${to}`} className={`button ${secondClass}`}>{text}</NavLink>
	}
	return <OrderTotal renderBtn={renderNextButton}/>
}

const mapStateToProps = state => ({
	locationCompleted: state.order.locationData.completed,
	modelCompleted: state.order.modelData.completed,
})

export default connect(mapStateToProps)(OrderTotalContainer);