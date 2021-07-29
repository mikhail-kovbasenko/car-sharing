import { appAPI } from "../../../api/api"
import { defaultOrderStatusData, defaultRentData } from "../../../utils/defaultData";
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
	const {getOrderStatusList, getRateStatusList} = appAPI;

	Promise.all([getOrderStatusList(), getRateStatusList()])
		.then(response => {
			const [orderStatusResponse, rateResponse] = response;

			const orderStatusResponseData = orderStatusResponse ? orderStatusResponse.data.data : defaultOrderStatusData;
			const rateResponseData = rateResponse ? rateResponse.data.data : defaultRentData;

			dispatch(setOrderStatusListActionCreator(orderStatusResponseData));
			dispatch(setRentListActionCreator(rateResponseData));
			dispatch(changeRateActionCreator(rateResponseData[0].rateTypeId.id));
			dispatch(setInitialazeAppActionCreator());
		})
}