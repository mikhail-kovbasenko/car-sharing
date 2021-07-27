import { orderAPI } from "../../../api/api";
import { CHANGE_COLOR_MODEL, CHANGE_MODELS_FILTER, CHANGE_RATE, CHECK_BABYCHAIR, SET_PICKUP_VALUE, CHECK_CAR_MODEL, CHECK_COMPLETED_EXTRA_DATA, CHECK_COMPLETED_LOCATION_DATA, CHECK_COMPLETED_MODEL_DATA, CHECK_FUEL, CHECK_RIGHT_HAND_DRIVE, CONFIRM_ORDER, SET_CAR_MODELS, SET_CITY_VALUE, SET_COMPLETE_PAGE, 	SET_CITIES_LIST, SET_RENT_FROM, SET_RENT_TO, TOGGLE_MODAL_WINDOW, SET_PICKUP_LIST, SET_PICKUP_FOR_INPUT } from "../../types";

/* Action Creators */

export const setCityValueActionCreator = value => ({
	type: SET_CITY_VALUE,
	data: {value}
})
export const setPickUpValueActionCreator = value => ({
	type: SET_PICKUP_VALUE,
	data: {value}
})
export const checkCompletedLocationData = () => ({
	type: CHECK_COMPLETED_LOCATION_DATA,
})
export const checkCarModelActionCreator = id => ({
	type: CHECK_CAR_MODEL,
	data: {id}
})
export const setCompletePageActionCreator = id => ({
	type: SET_COMPLETE_PAGE,
	data: {id}
})
export const changeModelsFilterActionCreator = value => ({
	type: CHANGE_MODELS_FILTER,
	data: {value}
})
export const changeColorModelActionCreator = value => ({
	type: CHANGE_COLOR_MODEL,
	data: {value}
})
export const changeRateActionCreator = value => ({
	type: CHANGE_RATE,
	data: {value}
})
export const checkFuelActionCreator = bool => ({
	type: CHECK_FUEL,
	data: {bool}
})
export const checkBabyChairActionCreator = bool => ({
	type: CHECK_BABYCHAIR,
	data: {bool}
})
export const checkRightHandDriveActionCreator = bool => ({
	type: CHECK_RIGHT_HAND_DRIVE,
	data: {bool}
})
export const setRentFromActionCreator = value => ({
	type: SET_RENT_FROM,
	data: {value}
})
export const setRentToActionCreator = value => ({
	type: SET_RENT_TO,
	data: {value}
})
export const checkCompletedModelData = () => ({
	type: CHECK_COMPLETED_MODEL_DATA
})
export const checkCompletedExtraData = () => ({
	type: CHECK_COMPLETED_EXTRA_DATA
})
export const toggleModalWindowStateActionCreator = () => ({
	type: TOGGLE_MODAL_WINDOW,
})
export const confirmOrderActionCreator = () => ({type: CONFIRM_ORDER})
export const setPickUpListForInputActionCreator = data => ({
	type: SET_PICKUP_FOR_INPUT,
	data: {data}
})
const setCarModelActionCreator = data => ({
	type: SET_CAR_MODELS,
	data: {data}
})
const setCitiesListActionCreator = data => ({
	type: SET_CITIES_LIST,
	data: {data}
})
const setPickUpPointListActionCreator = data => ({
	type: SET_PICKUP_LIST,
	data: {data}
})
/* Redux Thunks */

export const getCarsList = limit => dispatch => {
	orderAPI.getCars(limit).then(response => {
		if(response.status === 200) {
			dispatch(setCarModelActionCreator(response.data.data));
		}
	})
}
export const getPickUpPointList = limit => dispatch => {
	orderAPI.getPickUpPointList(limit).then(response => {
		if(response.status === 200) {
			const pointList = response.data.data;
			const citiesList = [];

			for(let point of pointList) {
				if(!point.cityId) continue;
				if(citiesList.length < 1 || !citiesList.some(city => city.id === point.cityId.id)) {
					citiesList.push(point.cityId);
				}
			}
			
			dispatch(setCitiesListActionCreator(citiesList));
			dispatch(setPickUpPointListActionCreator(pointList));
		}
	})
}