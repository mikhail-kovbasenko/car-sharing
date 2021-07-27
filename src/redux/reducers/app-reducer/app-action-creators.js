import { appAPI } from "../../../api/api"
import { SET_INITIALAZE_APP, SET_ORDER_STATUS_LIST, SET_RATE_LIST } from "../../types";

/* Action Creators */

const setInitialazeAppActionCreator = () => ({type: SET_INITIALAZE_APP});
const setOrderStatusListActionCreator = data => ({
	type: SET_ORDER_STATUS_LIST,
	data: {data}
})
const setRentListActionCreator = data => ({
	type: SET_RATE_LIST,
	data: {data}
})

export const initialazedAppActionCreator = () => dispatch => {
	Promise.all([appAPI.getOrderStatusList(), appAPI.getRateStatusList()])
		.then(response => {
			const [orderStatusResponse, rentResponse] = response;

			dispatch(setOrderStatusListActionCreator(orderStatusResponse.data.data));
			dispatch(setRentListActionCreator(rentResponse.data.data));
			dispatch(setInitialazeAppActionCreator());
		})
}