import {SET_SLIDER_DATA, SET_SLIDER_HEIGHT} from './../types';


const initialState = {
	items: null,
	sliderHeight: 0,
	
}

const slider = (state = initialState, action) => {
	switch(action.type) {
		case SET_SLIDER_HEIGHT: {
			return {
				...state,
				sliderHeight: action.data.height
			}
		}
		case SET_SLIDER_DATA: {
			return {
				...state,
				items: action.data.data
			}
		}
		default: return state;
	}
}

export const setSliderHeightActionCreator = height => {
	return {
		type: SET_SLIDER_HEIGHT,
		data: {height}
	}
}
export const setSliderDataActionCreator = (data) => ({
	type: SET_SLIDER_DATA,
	data: {data}
})

export default slider;