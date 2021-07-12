import Model from "./Model"
import { connect } from "react-redux"


const ModelContainer = ({cars}) => {
	return <Model cars={cars}/>
}

const mapStateToProps = state => ({
	cars: state.order.carsModels
})

export default connect(mapStateToProps)(ModelContainer)