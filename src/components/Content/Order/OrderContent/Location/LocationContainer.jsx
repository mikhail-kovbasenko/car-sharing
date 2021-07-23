import { useEffect, useRef } from "react";
import { connect } from "react-redux"
import { checkCompletedLocationData, setCityValueActionCreator, setPickUpListForInputActionCreator, setPickUpValueActionCreator } from "../../../../../redux/reducers/order-reducer/order-action-creators";
import Location from './Location';

const LocationContainer = ({ data, setCityValue, setPickupValue, checkLocationPageComplete, setPickUpPointForInput }) => {
	const { city, pickUpPoint, cityList, pickUpPointList, pickUpPointListForInput } = data;
	const inputCityRef = useRef();

	const onChangeCity = event => setCityValue(event.target.value);
	const onChangePickUp = event => setPickupValue(event.target.value);

	const onInputCityField = event => {
		const value = event.target.value;

		const result = pickUpPointList.filter(item => {
			if (item.city_id === value) return item;
		})

		setPickUpPointForInput(result)
	}
	const onInputPickUpField = event => {
		const value = event.target.value;

		if (value.length < 2 && city === '') setPickUpPointForInput([]);
		if (value.length >= 2 && city === '') {
			const result = pickUpPointList.filter(item => {
				if (item.name.indexOf(value) !== -1) return item;
			})
			
			setPickUpPointForInput(result);
		}

		getCityNameFromPickPoint(value);
		
	}
	const getCityNameFromPickPoint = string => {
		const index = string.indexOf(',');
		if(index === -1) return;

		const city = string.slice(index + 2);

		if(checkCorrectCityName(city)) setCityValue(city);
	}
	const checkCorrectCityName = string => {
		return cityList.some(city => city.name === string)
	}
	useEffect(() => checkLocationPageComplete(), [city, pickUpPoint]);

	return <Location city={city}
		pickUp={pickUpPoint}
		onChangeCity={onChangeCity}
		onChangePickUp={onChangePickUp}
		cityList={cityList}
		onInputCityField={onInputCityField}
		onInputPickUpField={onInputPickUpField}
		pickUpPointListForInput={pickUpPointListForInput}
		inputCityRef={inputCityRef}
	/>
}

const mapStateToProps = state => ({
	data: state.order.locationData,
})
const mapDispatchToProps = dispatch => ({
	setCityValue: value => {
		dispatch(setCityValueActionCreator(value))
	},
	setPickupValue: value => {
		dispatch(setPickUpValueActionCreator(value))
	},
	checkLocationPageComplete: () => {
		dispatch(checkCompletedLocationData());
	},
	setPickUpPointForInput: data => {
		dispatch(setPickUpListForInputActionCreator(data))
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(LocationContainer)