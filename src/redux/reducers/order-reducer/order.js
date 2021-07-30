import { CHANGE_COLOR_MODEL, CHANGE_MODELS_FILTER, CHANGE_RATE, CHECK_BABYCHAIR, CHECK_CAR_MODEL, CHECK_COMPLETED_EXTRA_DATA, CHECK_COMPLETED_LOCATION_DATA, CHECK_COMPLETED_MODEL_DATA, CHECK_FUEL, CHECK_RIGHT_HAND_DRIVE, CONFIRM_ORDER, SET_CAR_MODELS, SET_CITIES_LIST, SET_CITY_VALUE, SET_COMPLETE_PAGE, SET_ORDER_ID, SET_PICKUP_FOR_INPUT, SET_PICKUP_LIST, SET_PICKUP_VALUE, SET_RENT_FROM, SET_RENT_TO, SET_SAVED_ORDER_IN_STATE, TOGGLE_MODAL_WINDOW, TOGGLE_SENDING_LOADER } from "../../types";

const initialState = {
	navItems: [
		{id: 1, title: 'Местоположение', to: 'location', completed: false, nextPage: 2},
		{id: 2, title: 'Модель', to: 'model', completed: false, nextPage: 3},
		{id: 3, title: 'Дополнительно', to: 'extra', completed: false, nextPage: 4},
		{id: 4, title: 'Итого', to: 'total', completed: false, nextPage: null}
	],
	locationData: {
		cityList: null,
		pickUpPointList: null,
		pickUpPointListForInput: [],
		city: '',
		pickUpPoint: '',
		completed: false
	},
	modelData: {
		carsModels: null,
		modelsFilter: [],
		checkedModel: false,
		completed: false
	},
	extraData: {
		color: 'Любой',
		rate: {
			id: null,
			name: null
		},
		rentFrom: '',
		rentTo: '',
		fuel: false,
		babyChair: false,
		rightHandDrive: false,
		completed: false
	},
	isModalWindowOpen: false,
	completed: false,
	sendingOrderLoader: false,
	orderId: null,
	unRefresh: false,
	loadingCompleted: false
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
					rate: {
						id: action.data.id,
						name: action.data.name
					}
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
		case SET_CAR_MODELS: {
			return {
				...state,
				modelData: {
					...state.modelData,
					carsModels: action.data.data
				}
			}
		}
		case SET_CITIES_LIST: {
			return {
				...state,
				locationData: {
					...state.locationData,
					cityList: action.data.data
				}
			}
		}
		case SET_PICKUP_LIST: {
			return {
				...state,
				locationData: {
					...state.locationData,
					pickUpPointList: action.data.data
				}
			}
		}
		case SET_PICKUP_FOR_INPUT: {
			return {
				...state,
				locationData: {
					...state.locationData,
					pickUpPointListForInput: action.data.data
				}
			}
		}
		case TOGGLE_SENDING_LOADER: {
			return {
				...state,
				sendingOrderLoader: !state.sendingOrderLoader
			}
		}
		case SET_ORDER_ID: {
			return {
				...state,
				orderId: action.data.id,
				completed: true,
				unRefresh: true
			}
		}
		case SET_SAVED_ORDER_IN_STATE: {
			const {data} = action.data;
			return {
				...state,
				locationData: {
					...state.locationData,
					city: data.cityId.name,
					pickUpPoint: `${data.pointId.name}, ${data.pointId.address}`,
					completed: true
				},
				modelData: {
					...state.modelData,
					completed: true,
					checkedModel: data.carId.id,
					carsModels: [data.carId],
				},
				extraData: {
					...state.extraData,
					color: data.color,
					rentFrom: data.dateFrom,
					rentTo: data.dateTo,
					fuel: data.isFullTank,
					babyChair: data.isNeedChildChair,
					rightHandDrive: data.isRightWheel,
					completed: true,
					rate: {
						id: data.rateId,
						name: data.rateId
					}
				},
				completed: true,
				orderId: data.id,
				unRefresh: true
			}
		}
		default: return state;
	}
}


export default order;