import { useRef, useEffect, useLayoutEffect } from "react";
import { connect } from "react-redux"
import { setSliderHeightActionCreator } from "../../../redux/reducers/slider"
import Slider from "./Slider";

const SliderContainer = ({sliders, sliderHeight, setSliderHeight}) => {
	const sliderContentRef = useRef();

	useLayoutEffect(() => {
		if(sliderContentRef.current) setSliderHeight(sliderContentRef.current.offsetHeight);
	}, [])
	useEffect(() => {
		const onResize = window.addEventListener('resize', () => {
			const currentSliderHeight = sliderContentRef.current.offsetHeight;

			setSliderHeight(currentSliderHeight);
		})

		return () => window.removeEventListener('resize', onResize);
	}, [])

	return <Slider sliders={sliders} sliderRef={sliderContentRef} height={sliderHeight}/>
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