import { useEffect } from "react";
import { connect } from "react-redux"
import { checkCompletedLocationData, setCityValueActionCreator, setPickUpValueActionCreator } from "../../../../../redux/reducers/order";
import Location from './Location';

const LocationContainer = ({data, setCityValue, setPickupValue, checkLocationPageComplete}) => {
	let {city, pickUpPoint} = data;

	const onChangeCity = event => setCityValue(event.target.value);
	const onChangePickUp = event => setPickupValue(event.target.value);

	useEffect(() => checkLocationPageComplete(), [city, pickUpPoint]);

	return <Location city={city}
					     pickUp={pickUpPoint}
						  onChangeCity={onChangeCity}
						  onChangePickUp={onChangePickUp}
						/>
}

const mapStateToProps = state => ({
	data: state.order.locationData
})
const mapDispatchToProps = dispatch => {
	return {
		setCityValue: value => {
			dispatch(setCityValueActionCreator(value))
		},
		setPickupValue: value => {
			dispatch(setPickUpValueActionCreator(value))
		},
		checkLocationPageComplete: () => {
			dispatch(checkCompletedLocationData());
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(LocationContainer)