import { useEffect } from "react";
import { useRef, useLayoutEffect } from "react";
import { connect } from "react-redux"
import sliderData from "../../../commons/slider-data";
import { setSliderDataActionCreator, setSliderHeightActionCreator } from "../../../redux/reducers/slider"
import Slider from "./Slider";

const SliderContainer = ({sliders, sliderHeight, setSliderHeight, setSliderData}) => {
	const sliderContentRef = useRef();

	useEffect(() => {
		if(!sliders) {
			setSliderData(sliderData);
		}
	})
	useLayoutEffect(() => {
		if(sliderContentRef.current) {
			setSliderHeight(sliderContentRef.current.offsetHeight)
		}
	}, [sliders])
	useLayoutEffect(() => {
		const onResize = window.addEventListener('resize', () => {
			const currentSliderHeight = sliderContentRef.current.offsetHeight;

			setSliderHeight(currentSliderHeight);
		})

		return () => window.removeEventListener('resize', onResize);
	}, [sliders])

	return !sliders ? null : <Slider sliders={sliders} sliderRef={sliderContentRef} height={sliderHeight}/>
}

const mapStateToProps = state => ({
		sliders: state.slider.items,
		sliderHeight: state.slider.sliderHeight
})
const mapDispatchToProps = dispatch => {
	return {
		setSliderHeight: height => {
			dispatch(setSliderHeightActionCreator(height));
		},
		setSliderData: data => {
			dispatch(setSliderDataActionCreator(data))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SliderContainer);