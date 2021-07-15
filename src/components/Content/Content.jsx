import './Content.scss';
import Main from './Main/Main';
import SliderContainer from './Slider/SliderContainer';

const Content = () => {
	return (
		<div className="content">
			<Main/>
			<SliderContainer/>
		</div>
	)
}

export default Content;