import Model from "./Model"
import { connect } from "react-redux"
import { changeModelsFilterActionCreator, checkCarModelActionCreator, checkCompletedModelData, getCarsList } from "../../../../../redux/reducers/order-reducer/order-action-creators"
import { useEffect } from "react";


const ModelContainer = ({cars, checkedModel, checkCar, filterModelsValue, changeFilter, checkCompletedModel, carsE, getCars}) => {
	const clickOnCarModel = id => checkCar(id);
	const changeRadioValue = event => changeFilter(+event.target.value);

	useEffect(() => checkCompletedModel(), [checkedModel]);
	useEffect(() => getCars(20), []);
	console.log(carsE);

	return <Model cars={cars} 
				     clickOnCarModel={clickOnCarModel} 
					  checkedModel={checkedModel}
					  radioValue={filterModelsValue}
					  changeRadioValue={changeRadioValue}
					/>
}

const mapStateToProps = state => ({
	cars: state.order.modelData.carsModels,
	carsE: state.order.modelData.carsModelEdit,
	checkedModel: state.order.modelData.checkedModel,
	filterModelsValue: state.order.modelData.filterModelsValue
})
const mapDispatchToProps = dispatch => ({
	checkCar: id => dispatch(checkCarModelActionCreator(id)),
	changeFilter: value => dispatch(changeModelsFilterActionCreator(value)),
	checkCompletedModel: () => dispatch(checkCompletedModelData()),
	getCars: limit => dispatch(getCarsList(limit))
})

export default connect(mapStateToProps, mapDispatchToProps)(ModelContainer)