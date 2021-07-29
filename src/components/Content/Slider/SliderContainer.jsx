import { useRef } from "react";
import { connect } from "react-redux"
import { setSliderHeightActionCreator } from "../../../redux/reducers/slider"
import Slider from "./Slider";

const SliderContainer = ({sliders, sliderHeight, setSliderHeight}) => {
	const sliderContentRef = useRef();

	return <Slider sliders={sliders} sliderRef={sliderContentRef} height={sliderHeight} setSliderHeight={setSliderHeight}/>
}

const mapStateToProps = state => {
	return {
		sliders: Object.values(state.slider.items),
		sliderHeight: state.slider.sliderHeight
	}
}
const mapDispatchToProps = dispatch => {
	return {
		setSliderHeight: height => {
			dispatch(setSliderHeightActionCreator(height));
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SliderContainer);