import styled from "styled-components";

const SlideInfo = ({title, text, color}) => {
	return (
		<div className="slide-info">
			<div className="slide-info__row">
				<div className="slide-info__title">{title}</div>
				<div className="slide-info__text">{text}</div>
				<div className="slide-info__button">
					<SlideInfoButton className="button" color={color}>Подробнее</SlideInfoButton>
				</div>
			</div>
		</div>
	)
}

const SlideInfoButton = styled.button`
	padding: 15px 40px 11px 40px;
	border-radius: 4px;
	background: ${props => props.color};
`

export default SlideInfo;
