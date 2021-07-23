import { CHANGE_COLOR_MODEL, CHANGE_MODELS_FILTER, CHANGE_RATE, CHECK_BABYCHAIR, CHECK_CAR_MODEL, CHECK_COMPLETED_EXTRA_DATA, CHECK_COMPLETED_LOCATION_DATA, CHECK_COMPLETED_MODEL_DATA, CHECK_FUEL, CHECK_RIGHT_HAND_DRIVE, CONFIRM_ORDER, SET_CAR_MODELS, SET_CITY_VALUE, SET_COMPLETE_PAGE, SET_PICKUP_DATA_FOR_INPUT, SET_PICKUP_VALUE, SET_RENT_FROM, SET_RENT_TO, TOGGLE_MODAL_WINDOW } from "../../types";

const initialState = {
	navItems: [
		{id: 1, title: 'Местоположение', to: 'location', completed: false, nextPage: 2},
		{id: 2, title: 'Модель', to: 'model', completed: false, nextPage: 3},
		{id: 3, title: 'Дополнительно', to: 'extra', completed: false, nextPage: 4},
		{id: 4, title: 'Итого', to: 'total', completed: false, nextPage: null}
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
			{id: 1, city_id: 'Казань', name: 'Белинского 18'},
			{id: 2, city_id: 'Казань', name: 'Дементьева 2А'},
			{id: 3, city_id: 'Казань', name: 'Фучика 33'},
			{id: 4, city_id: 'Ульяновск', name: 'Нариманова 42'},
			{id: 5, city_id: 'Ульяновск', name: 'Гоначарова 1А'},
			{id: 6, city_id: 'Москва', name: 'Пушкина 22'},
			{id: 7, city_id: 'Москва', name: 'Ферсмана 5'},
			{id: 8, city_id: 'Москва', name: 'Чаянова 50'},
			{id: 9, city_id: 'Санкт-Петербург', name: 'Караванная 3'},
			{id: 10, city_id: 'Санкт-Петербург', name: 'Рубинштейна 7'},
			{id: 11, city_id: 'Сочи', name: 'Орджоникидзе 22'},
			{id: 12, city_id: 'Сочи', name: 'Островского 19'},
			{id: 13, city_id: 'Новосибирск', name: 'Фрунзе 44'},
			{id: 14, city_id: 'Новосибирск', name: 'Ленина 55'},
			{id: 15, city_id: 'Новосибирск', name: 'Максима Горького 7'},
			{id: 16, city_id: 'Краснодар', name: 'Рашпилевская 11'},
		],
		city: '',
		pickUpPoint: '',
		pickUpPointListForInput: [],
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
		carsModelEdit: null,
		filterModelsValue: 0,
		checkedModel: false,
		completed: false
	},
	extraData: {
		color: 'Любой',
		rate: 'Поминутно',
		rentFrom: '',
		rentTo: '',
		fuel: false,
		babyChair: false,
		rightHandDrive: false,
		completed: false
	},
	isModalWindowOpen: false,
	completed: false,
	orderNumber: 'RU58491823'
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
			
			//editedState.locationData.completed = checkCompletedLocationData(editedState.locationData);

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
			
			//editedState.locationData.completed = checkCompletedLocationData(editedState.locationData);

			return editedState;
		}
		case CHECK_COMPLETED_LOCATION_DATA: {
			const cityValue = state.locationData.city;
			const pickUpPointValue = state.locationData.pickUpPoint;
			let completed = false;

			if(cityValue !== "" && pickUpPointValue !== "") completed = true;

			return {
				...state,
				locationData: {
					...state.locationData,
					completed
				}
			}

		}
		case CHECK_CAR_MODEL: {
			return {
				...state,
				modelData: {
					...state.modelData,
					checkedModel: action.data.id,
				}
			}
		}
		case SET_COMPLETE_PAGE: {
			const editedNavItems = state.navItems.map(item => {
				if(item.id !== action.data.id) return item;

				item.completed = true;

				return item;
			})
			return {
				...state,
				navItems: editedNavItems
			}
		}
		case CHANGE_MODELS_FILTER: {
			return {
				...state,
				modelData: {
					...state.modelData,
					filterModelsValue: action.data.value
				}
			}
		}
		case CHANGE_COLOR_MODEL: {
			return {
				...state,
				extraData: {
					...state.extraData,
					color: action.data.value
				}
			}
		}
		case CHANGE_RATE: {
			return {
				...state,
				extraData: {
					...state.extraData,
					rate: action.data.value
				}
			}
		}
		case CHECK_FUEL: {
			return {
				...state,
				extraData: {
					...state.extraData,
					fuel: action.data.bool
				}
			}
		}
		case CHECK_BABYCHAIR: {
			return {
				...state,
				extraData: {
					...state.extraData,
					babyChair: action.data.bool
				}
			}
		}
		case CHECK_RIGHT_HAND_DRIVE: {
			return {
				...state,
				extraData: {
					...state.extraData,
					rightHandDrive: action.data.bool
				}
			}
		}
		case SET_RENT_FROM: {
			return {
				...state,
				extraData: {
					...state.extraData,
					rentFrom: action.data.value
				}
			}
		}
		case SET_RENT_TO: {
			return {
				...state,
				extraData: {
					...state.extraData,
					rentTo: action.data.value
				}
			}
		}
		case CHECK_COMPLETED_MODEL_DATA: {
			let completed = false;

			if(state.modelData.checkedModel) completed = true;

			return {
				...state,
				modelData: {
					...state.modelData,
					completed

				}
			}
		}
		case CHECK_COMPLETED_EXTRA_DATA: {
			let completed = false;
			const {rentFrom, rentTo} = state.extraData;

			if(rentFrom !== '' && rentTo !== '') completed = true;

			return {
				...state,
				extraData: {
					...state.extraData,
					completed
				}
			}
		}
		case TOGGLE_MODAL_WINDOW: {
			return {
				...state,
				isModalWindowOpen: !state.isModalWindowOpen
			}
		}
		case CONFIRM_ORDER: {
			return {
				...state,
				completed: true
			}
		}
		case SET_PICKUP_DATA_FOR_INPUT: {
			return {
				...state,
				locationData: {
					...state.locationData,
					pickUpPointListForInput: action.data.data
				}
			}
		}
		case SET_CAR_MODELS: {
			return {
				...state,
				modelData: {
					...state.modelData,
					carsModelEdit: action.data.data
				}
			}
		}
		default: return state;
	}
}


export default order;