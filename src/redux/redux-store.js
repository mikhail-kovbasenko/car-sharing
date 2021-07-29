import { applyMiddleware, combineReducers, createStore } from "redux"
import slider from './reducers/slider';
import sidebar from "./reducers/sidebar";
import order from "./reducers/order-reducer/order";
import auth from "./reducers/auth-reducer/auth";
import app from "./reducers/app-reducer/app";
import thunk from "redux-thunk";

const reducers = combineReducers({
	slider,
	sidebar,
	order,
	auth,
	app
})

const store = createStore(reducers, applyMiddleware(thunk));

window.store = store.getState();

export default store; 