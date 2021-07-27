import { useEffect, useRef } from "react";
import { connect } from "react-redux";
import Preloader from "./../../../../../commons/Preloader/Preloader";
import { checkCompletedLocationData, getPickUpPointList, setCityValueActionCreator, setPickUpListForInputActionCreator, setPickUpValueActionCreator } from "../../../../../redux/reducers/order-reducer/order-action-creators";
import Location from './Location';

const cityLimit = 15;
const pickPointLimit = 50;

const LocationContainer = ({ data, setCityValue, setPickupValue, checkLocationPageComplete, getPoints, setPickPointForInput }) => {
	const { city, pickUpPoint, cityList, pickUpPointList, pickUpPointListForInput } = data;
	const inputCityRef = useRef();

	const onChangeCity = event => setCityValue(event.target.value);
	const onChangePickUp = event => setPickupValue(event.target.value);

	const onInputCityField = event => {
		const value = event.target.value;

		const city = cityList.find(city => value.toLowerCase() === city.name.toLowerCase());
		if(city) {
			const pointsList = pickUpPointList.filter(point => {
				if(!point.cityId) return false;
				if(point.cityId.id === city.id) return point;
			})

			setPickPointForInput(pointsList);
		}

		
	}
	const onInputPickUpField = event => {
		const value = event.target.value;

		if (value.length < 2 && city === '') return;
		if (value.length >= 2 && city === '') {
			const result = pickUpPointList.filter(item => {
				if (item.name.indexOf(value) !== -1) return item;
			})
		}

		getCityNameFromPickPoint(value);
		
	}

	const getCityNameFromPickPoint = string => {

	}
	const checkCorrectCityName = string => {

	}
	useEffect(() => checkLocationPageComplete(), [city, pickUpPoint]);
	useEffect(() => {
		if(!cityList) getPoints(pickPointLimit);
	}, [])
	return !cityList
			 ? <Preloader/>
			 :	<Location   city={city}
								pickUp={pickUpPoint}
								onChangeCity={onChangeCity}
								onChangePickUp={onChangePickUp}
								cityList={cityList}
								pickUpPointList={pickUpPointListForInput}
								onInputCityField={onInputCityField}
								onInputPickUpField={onInputPickUpField}
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
	setPickPointForInput: data => {
		dispatch(setPickUpListForInputActionCreator(data))
	},
	getPoints: limit => {
		dispatch(getPickUpPointList(limit));
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(LocationContainer)