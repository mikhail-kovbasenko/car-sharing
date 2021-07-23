import { connect } from "react-redux"
import { NavLink } from "react-router-dom"
import { setCompletePageActionCreator, toggleModalWindowStateActionCreator } from "../../../../redux/reducers/order"
import OrderTotal from "./OrderTotal"

const OrderTotalContainer = ({
	locationCompleted,
	modelCompleted, 
	extraCompleted, 
	navItems, 
	setCompletePage,
	carModels,
	checkedModel,
	color,
	rate,
	babyChair,
	fuel,
	rightDrive,
	rentTo,
	rentFrom,
	isModalOpen,
	toggleModal,
	completed
}) => {
	const model = carModels.find(item => item.id === checkedModel);
	
	const renderNextButton = (text, to, id) => {
		let defaultClass = 'button'
		let secondClass = id ? 'disabled' : null;
		const thirdClass = completed ? 'button-2' : null;
		const buttonText = completed ? 'Отменить' : text;
		let completedPage = false;
		let defaultOnClick = id ? setCompletePage.bind(null, id) : toggleModal.bind(null);

		switch(to) {
			case 'model': completedPage = locationCompleted; break; 
			case 'extra': completedPage = modelCompleted; break;
			case 'total': completedPage = extraCompleted; break;
		}
		
		secondClass = !completedPage ? secondClass : null; 

		return <NavLink to={`/order/${to}`} className={`${defaultClass} ${secondClass} ${thirdClass}`} onClick={defaultOnClick}>{buttonText}</NavLink>
	}
	const calculateRentTime = (from, to) => {
		let delta = (new Date(to) - new Date(from)) / 1000;
		
		const fullDays = Math.floor(delta / 86400);
		delta -= fullDays * 86400;

		const hours = Math.floor(delta / 3600) % 24;
		delta -= hours * 3600;

		const minutes = Math.floor(delta / 60) % 60;
		delta -= minutes * 60;

		const dateStr = `${fullDays} д. ${hours} ч. ${minutes} мин.`;

		return dateStr;
	}

	return <OrderTotal renderBtn={renderNextButton}
		 				    navItems={navItems}
							 modelData={{model, modelCompleted}}  
							 extraData={{color, rate, babyChair, fuel, rightDrive, extraCompleted}}
							 toggleModal={toggleModal}
							 isModalOpen={isModalOpen}
							 rentFrom={rentFrom}
							 rentTo={rentTo}
							 calculateRent={calculateRentTime}
							/>
}

const mapStateToProps = state => ({
	locationCompleted: state.order.locationData.completed,
	modelCompleted: state.order.modelData.completed,
	extraCompleted: state.order.extraData.completed,
	navItems: state.order.navItems,
	carModels: state.order.modelData.carsModels,
	checkedModel: state.order.modelData.checkedModel,
	color: state.order.extraData.color,
	rate: state.order.extraData.rate,
	babyChair: state.order.extraData.babyChair,
	fuel: state.order.extraData.fuel,
	rentTo: state.order.extraData.rentTo,
	rentFrom: state.order.extraData.rentFrom,
	rightDrive: state.order.extraData.rightHandDrive,
	isModalOpen: state.order.isModalWindowOpen,
	completed: state.order.completed
})

const mapDispatchToProps = dispatch => ({
	setCompletePage: id => dispatch(setCompletePageActionCreator(id)),
	toggleModal: () => dispatch(toggleModalWindowStateActionCreator())
})

export default connect(mapStateToProps, mapDispatchToProps)(OrderTotalContainer);