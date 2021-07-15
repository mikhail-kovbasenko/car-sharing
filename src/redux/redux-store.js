import { combineReducers, createStore } from "redux"
import  slider from './reducers/slider';
import sidebar from "./reducers/sidebar";

const reducers = combineReducers({
	slider,
	sidebar
})

const store = createStore(reducers);

window.store = store.getState();

export default store; 