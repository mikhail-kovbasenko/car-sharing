const initialState = {
	navItems: [
		{id: 1, title: 'Местоположение', to: 'location', visited: false},
		{id: 2, title: 'Модель', to: 'model', visited: false},
		{id: 3, title: 'Дополнительно', to: 'extra', visited: false},
		{id: 4, title: 'Итого', to: 'total', visited: false}
	]
}

const order = (state = initialState, action) => {
	switch(action.type) {
		default: return state;
	}
}

export default order;