import { appAPI } from "../../../api/api"
import { SET_INITIALAZE_APP, SET_ORDER_STATUS_LIST, SET_RATE_LIST } from "../../types";
import { changeRateActionCreator } from "../order-reducer/order-action-creators";

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
			const [orderStatusResponse, rateResponse] = response;

			dispatch(setOrderStatusListActionCreator(orderStatusResponse.data.data));
			dispatch(setRentListActionCreator(rateResponse.data.data));
			dispatch(changeRateActionCreator(rateResponse.data.data[0].rateTypeId.id));
			dispatch(setInitialazeAppActionCreator());
		})
}