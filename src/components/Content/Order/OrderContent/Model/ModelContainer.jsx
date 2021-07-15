import Model from "./Model"
import { connect } from "react-redux"
import { checkCarModelActionCreator } from "../../../../../redux/reducers/order"

const ModelContainer = ({cars, checkedModel, checkCar}) => {
	const clickOnCarModel = id => checkCar(id);

	return <Model cars={cars} clickOnCarModel={clickOnCarModel} checkedModel={checkedModel}/>
}

const mapStateToProps = state => ({
	cars: state.order.modelData.carsModels,
	checkedModel: state.order.modelData.checkedModel
})
const mapDispatchToProps = dispatch => ({
	checkCar: id => dispatch(checkCarModelActionCreator(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(ModelContainer)