import Model from "./Model"
import { connect } from "react-redux"
import { changeModelsFilterActionCreator, checkCarModelActionCreator, checkCompletedModelData } from "../../../../../redux/reducers/order"
import { useEffect } from "react";

const ModelContainer = ({cars, checkedModel, checkCar, filterModelsValue, changeFilter, checkCompletedModel}) => {
	const clickOnCarModel = id => checkCar(id);
	const changeRadioValue = event => changeFilter(+event.target.value);

	useEffect(() => checkCompletedModel(), [checkedModel]);

	return <Model cars={cars} 
				     clickOnCarModel={clickOnCarModel} 
					  checkedModel={checkedModel}
					  radioValue={filterModelsValue}
					  changeRadioValue={changeRadioValue}
					/>
}

const mapStateToProps = state => ({
	cars: state.order.modelData.carsModels,
	checkedModel: state.order.modelData.checkedModel,
	filterModelsValue: state.order.modelData.filterModelsValue
})
const mapDispatchToProps = dispatch => ({
	checkCar: id => dispatch(checkCarModelActionCreator(id)),
	changeFilter: value => dispatch(changeModelsFilterActionCreator(value)),
	checkCompletedModel: () => dispatch(checkCompletedModelData())
})

export default connect(mapStateToProps, mapDispatchToProps)(ModelContainer)