import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import { renderArrowNext, renderArrowPrev, renderIndicator } from "../../../utils/Carousel/carouselSettings";
import './Slider.scss';
import styled from "styled-components";
import SlideInfo from "./SlideInfo/SlideInfo";

const Slider = ({sliders, sliderRef, height}) => {
	const getSlides = sliders.map((slide, index) => {
		return (
			<Slide key={slide.title + index} height={height} img={slide.img}>
				<SlideInfo title={slide.title} text={slide.text} color={slide.color}/>
			</Slide>
		)
	})
	return (
		<div className="slider">
			<div className="slider__content" ref={sliderRef}>
				<Carousel
					// autoPlay={true}
					// interval={4000}
					// infiniteLoop
					showThumbs={false} 
					statusFormatter={() => false}
					renderIndicator={renderIndicator}
					renderArrowPrev={renderArrowPrev}
					renderArrowNext={renderArrowNext}
				>
					{getSlides}
				</Carousel>
			</div>
		</div>
	)
}

const Slide = styled.div`
	height: ${props => props.height}px;
	width: 100%;
	background: ${props => `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${process.env.PUBLIC_URL}/slider-images/${props.img})`};
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
`

export default Slider;