import {SET_SLIDER_HEIGHT} from './../types';


const initialState = {
	items: {
		0: {
			img: 'free-parking.jpg',
			title: 'Бесплатная парковка',
			text: 'Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая ПДД, а также в аэропортах.',
			color: 'linear-gradient(90deg, #13493F 0%, #0C7B1B 100%)'
		},
		1: {
			img: 'insurance.jpg',
			title: 'Страховка',
			text: 'Полная страховка страховка автомобиля',
			color: 'linear-gradient(90deg, #132949 0%, #0C7B67 100%)'
		},
		2: {
			img: 'benzin.jpg',
			title: 'Бензин',
			text: 'Полный бак на любой заправке города за наш счёт',
			color: 'linear-gradient(90deg, #493013 0%, #7B0C3B 100%)'
		},
		3: {
			img: 'service.jpg',
			title: 'Обслуживание',
			text: 'Автомобиль проходит еженедельное ТО',
			color: 'linear-gradient(90deg, #281349 0%, #720C7B 100%)'
		},
	},
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
		default: return state;
	}
}

export const setSliderHeightActionCreator = height => {
	return {
		type: SET_SLIDER_HEIGHT,
		data: {height}
	}
}

export default slider;