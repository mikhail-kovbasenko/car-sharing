import prev_arrow from './../../commons/icons/slider-icons/arrow-back.svg';
import next_arrow from './../../commons/icons/slider-icons/arrow-forward.svg';
import nextId from 'react-id-generator';
import './carouselCustomize.scss';

const indicatorStyle = {
	width: '8px',
	height: '8px',
	backgroundColor: '#eee',
	display: 'inline-block',
	margin: '0 8px 32px 8px',
	borderRadius: '50%'
}

export const renderIndicator = (onClickHandler, isSelected, index) => {
	const keyId = nextId();

	if(isSelected) {
		return <li
			key={keyId}
			style={{...indicatorStyle, backgroundColor: '#0EC261'}}
		/>
	}
	return <li
			style={indicatorStyle}
			key={keyId}
			onClick={onClickHandler}
			onKeyDown={onClickHandler}
			value={index}
			role="button"
			tabIndex={0}
		/>
}
export const renderArrowPrev = (onClickHandler, hasPrev) => {
	if(hasPrev) {
		return (
			<div className="arrow prev" onClick={onClickHandler}>
				<img src={prev_arrow} alt=""/>
			</div>
		)
	}
}
export const renderArrowNext = (onClickHandler, hasNext) => {
	if(hasNext) {
		return (
			<div className="arrow next" onClick={onClickHandler}>
				<img src={next_arrow} alt=""/>
			</div>
		)
	}
}