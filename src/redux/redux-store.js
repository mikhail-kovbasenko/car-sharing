import { combineReducers, createStore } from "redux"
import  slider from './reducers/slider';

const reducers = combineReducers({
	slider
})

const store = createStore(reducers);

window.store = store.getState();

export default store; 