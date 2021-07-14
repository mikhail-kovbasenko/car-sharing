import { CHANGE_EXTRA_DATE, CHANGE_FROM_EXTRA_DATE, CHANGE_TO_EXTRA_DATE } from "../types";

const initialState = {
	navItems: [
		{id: 1, title: 'Местоположение', to: 'location', visited: false},
		{id: 2, title: 'Модель', to: 'model', visited: false},
		{id: 3, title: 'Дополнительно', to: 'extra', visited: false},
		{id: 4, title: 'Итого', to: 'total', visited: false}
	],
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
}

const order = (state = initialState, action) => {
	switch(action.type) {
		
		default: return state;
	}
}



export default order;