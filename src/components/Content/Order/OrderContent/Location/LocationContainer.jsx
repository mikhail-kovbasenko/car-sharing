import { connect } from "react-redux"
import { setCityValueActionCreator, setPickUpValueActionCreator } from "../../../../../redux/reducers/order";
import Location from './Location';

const LocationContainer = ({data, setCityValue, setPickupValue}) => {
	let {city, pickUpPoint} = data;

	const onChangeCity = event => setCityValue(event.target.value);
	const onChangePickUp = event => setPickupValue(event.target.value);

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
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(LocationContainer)