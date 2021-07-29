import { useEffect } from "react";
import { connect } from "react-redux";
import { changeColorModelActionCreator, changeRateActionCreator, checkBabyChairActionCreator, checkCompletedExtraData, checkFuelActionCreator, checkRightHandDriveActionCreator, setRentFromActionCreator, setRentToActionCreator } from "../../../../../redux/reducers/order-reducer/order-action-creators";
import Extra from "./Extra"

const ExtraContainer = ({
	color,
	rate,
	babyChair,
	rentFrom,
	rentTo,
	fuel,
	rightHandDrive,
	changeColor,
	changeRate,
	checkFuel,
	checkBabyChair,
	checkRightHandDrive,
	setRentFrom,
	setRentTo,
	checkCompletedExtra
}) => {
	const changeRadioValueColor = event => changeColor(event.target.value);
	const changeRadioValueRate = event => {
		const id = event.target.value;
		const name = event.target.dataset.name;

		changeRate(id, name);
	} 
	const checkCheckboxValueFuel = event => checkFuel(event.target.checked);
	const checkCheckboxValueBabyChair = event => checkBabyChair(event.target.checked);
	const checkCheckboxValueRightHandDrive = event => checkRightHandDrive(event.target.checked);
	const setRentFromValue = event => setRentFrom(event.target.value);
	const setRentToValue = event => setRentTo(event.target.value);
	const clearInput = event => {
		const dataId = event.target.dataset.id;

		switch(dataId) {
			case 'from': setRentFrom(''); break;
			case 'to': setRentTo(''); break;
		}
	}

	useEffect(() => checkCompletedExtra(), [rentFrom, rentTo]);
	
	return <Extra changeRadioValueColor={changeRadioValueColor}
		color={color}
		rate={rate}
		babyChair={babyChair}
		fuel={fuel}
		rightHandDrive={rightHandDrive}
		checkCheckboxValueFuel={checkCheckboxValueFuel}
		checkCheckboxValueBabyChair={checkCheckboxValueBabyChair}
		checkCheckboxValueRightHandDrive={checkCheckboxValueRightHandDrive}
		changeRadioValueRate={changeRadioValueRate}
		setRentFromValue={setRentFromValue}
		setRentToValue={setRentToValue}
		rentFrom={rentFrom}
		rentTo={rentTo}
		clearInput={clearInput}
	/>
}

const mapStateToProps = state => ({
	color: state.order.extraData.color,
	rate: state.order.extraData.rate.id,
	babyChair: state.order.extraData.babyChair,
	fuel: state.order.extraData.fuel,
	rightHandDrive: state.order.extraData.rightHandDrive,
	rentFrom: state.order.extraData.rentFrom,
	rentTo: state.order.extraData.rentTo
})
const mapDispatchToProps = dispatch => ({
	changeColor: value => dispatch(changeColorModelActionCreator(value)),
	changeRate: (id, name) => dispatch(changeRateActionCreator(id, name)),
	checkFuel: bool => dispatch(checkFuelActionCreator(bool)),
	checkBabyChair: bool => dispatch(checkBabyChairActionCreator(bool)),
	checkRightHandDrive: bool => dispatch(checkRightHandDriveActionCreator(bool)),
	setRentFrom: value => dispatch(setRentFromActionCreator(value)),
	setRentTo: value => dispatch(setRentToActionCreator(value)),
	checkCompletedExtra: () => dispatch(checkCompletedExtraData())
})

export default connect(mapStateToProps, mapDispatchToProps)(ExtraContainer);