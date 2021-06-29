import { combineReducers, createStore } from "redux"
import slider from './reducers/slider';
import sidebar from "./reducers/sidebar";
import order from "./reducers/order";

const reducers = combineReducers({
	slider,
	sidebar,
	order
})

const store = createStore(reducers);

window.store = store.getState();

export default store; 