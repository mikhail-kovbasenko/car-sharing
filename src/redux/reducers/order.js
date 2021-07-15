import { CHECK_CAR_MODEL, SET_CITY_VALUE, SET_PICKUP_VALUE } from "../types";

const initialState = {
	navItems: [
		{id: 1, title: 'Местоположение', to: 'location', visited: false},
		{id: 2, title: 'Модель', to: 'model', visited: false},
		{id: 3, title: 'Дополнительно', to: 'extra', visited: false},
		{id: 4, title: 'Итого', to: 'total', visited: false}
	],
	locationData: {
		cityList: [
			{id: 1, name: 'Казань'},
			{id: 2, name: 'Ульяновск'},
			{id: 3, name: 'Москва'},
			{id: 4, name: 'Санкт-Петербург'},
			{id: 5, name: 'Сочи'},
			{id: 6, name: 'Новосибирск'},
			{id: 7, name: 'Краснодар'}
		],
		pickUpPointList: [
			{id: 1, city_id: 1, name: ''},
			{id: 2, city_id: 1, name: ''},
			{id: 3, city_id: 1, name: ''},
			{id: 4, city_id: 2, name: ''},
			{id: 5, city_id: 2, name: ''},
			{id: 6, city_id: 3, name: ''},
			{id: 7, city_id: 3, name: ''},
			{id: 8, city_id: 3, name: ''},
			{id: 9, city_id: 4, name: ''},
			{id: 10, city_id: 4, name: ''},
			{id: 11, city_id: 5, name: ''},
			{id: 12, city_id: 5, name: ''},
			{id: 13, city_id: 6, name: ''},
			{id: 14, city_id: 6, name: ''},
			{id: 15, city_id: 6, name: ''},
			{id: 16, city_id: 7, name: ''},
		],
		city: '',
		pickUpPoint: '',
		completed: false
	},
	modelData: {
		carsModels: [
			{id: 1, src: 'image 1.jpg', alt: 'image_1', title: 'ELANTRA', min: 12000, max: 25000},
			{id: 2, src: 'image 2.jpg', alt: 'image_2', title: 'i30 N', min: 10000, max: 32000},
			{id: 3, src: 'image 3.jpg', alt: 'image_3', title: 'CRETA', min: 12000, max: 25000},
			{id: 4, src: 'image 4.jpg', alt: 'image_4', title: 'SONATA', min: 10000, max: 32000},
			{id: 5, src: 'image 1.jpg', alt: 'image_1', title: 'ELANTRA', min: 12000, max: 25000},
			{id: 6, src: 'image 2.jpg', alt: 'image_2', title: 'i30 N', min: 10000, max: 32000},
			{id: 7, src: 'image 3.jpg', alt: 'image_3', title: 'CRETA', min: 12000, max: 25000},
			{id: 8, src: 'image 4.jpg', alt: 'image_4', title: 'SONATA', min: 10000, max: 32000}
		],
		filterModels: 0,
		checkedModel: false,
		completed: false
	},
	extraData: {
		color: 0,
		rate: 0,
		rentFrom: null,
		rentTo: null,
		fuel: false,
		babyChair: false,
		rightHandDrive: false,
		completed: false
	}
}

const checkCompletedLocationData = (data) => {
	if(data.city !== '' && data.pickUpPoint !== '') return true;

	return false;
}

const order = (state = initialState, action) => {
	switch(action.type) {
		case SET_CITY_VALUE: {			
			const editedState = {
				...state,
				locationData: {
					...state.locationData,
					city: action.data.value
				}
			}
			
			editedState.locationData.completed = checkCompletedLocationData(editedState.locationData);

			return editedState;
		}
		case SET_PICKUP_VALUE: {
			const editedState = {
				...state,
				locationData: {
					...state.locationData,
					pickUpPoint: action.data.value
				}
			}
			
			editedState.locationData.completed = checkCompletedLocationData(editedState.locationData);

			return editedState;
		}
		case CHECK_CAR_MODEL: {
			return {
				...state,
				modelData: {
					...state.modelData,
					checkedModel: action.data.id,
					completed: true
				}
			}
		}
		default: return state;
	}
}


export const setCityValueActionCreator = value => ({
	type: SET_CITY_VALUE,
	data: {value}
})
export const setPickUpValueActionCreator = value => ({
	type: SET_PICKUP_VALUE,
	data: {value}
})
export const checkCarModelActionCreator = id => ({
	type: CHECK_CAR_MODEL,
	data: {id}
})



export default order;