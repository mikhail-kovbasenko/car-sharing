import { SET_INITIALAZE_APP, SET_ORDER_STATUS_LIST, SET_RATE_LIST } from "../../types";

const initialState = {
	orderStatusList: null,
	rateList: null,
	citiesList: null,
	initialazed: false
}

const app = (state = initialState, action) => {
	switch(action.type) {
		case SET_INITIALAZE_APP: {
			return {
				...state,
				initialazed: true
			}
		}
		case SET_ORDER_STATUS_LIST: {
			return {
				...state,
				orderStatusList: action.data.data
			}
		}
		case SET_RATE_LIST: {
			return {
				...state,
				rateList: action.data.data
			}
		}
		default: return state
	}
}

export default app;