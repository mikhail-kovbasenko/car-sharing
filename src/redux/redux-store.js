import { applyMiddleware, combineReducers, createStore } from "redux"
import slider from './reducers/slider';
import sidebar from "./reducers/sidebar";
import order from "./reducers/order-reducer/order";
import thunk from "redux-thunk";

const reducers = combineReducers({
	slider,
	sidebar,
	order
})

const store = createStore(reducers, applyMiddleware(thunk));

window.store = store.getState();

export default store; 