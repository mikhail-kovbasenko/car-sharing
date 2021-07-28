import styled from 'styled-components';
import { getCorrectSrcForImg } from '../../../../../utils/correctSrcForImg';
import './Total.scss';
import defaultCar from "../../../../../commons/icons/model-order-icons/default-cars.jpeg";

const Total = ({model, modelNum, modelInfo, completed, rentFrom}) => {
	const src = getCorrectSrcForImg(model.thumbnail.path);

	return (
		<div className="total">
			<div className="total__content">
				{
					completed && <CompletedOrderTitle>{"Ваш заказ подтверждён"}</CompletedOrderTitle>
				}
				<div className="total__model">{model.title}</div>
				<div className="total__number">
					<div className="total__number-block">{model.number}</div>
				</div>
				{modelInfo}
				<div className="total__available">
					<span className="total__available-title">Доступна с</span>
					<span className="total__available-date">{rentFrom}</span>
				</div>
			</div>
			<div className="total__car">
				<img crossOrigin="anonymous" referrerPolicy="origin" src={src} alt={model.title} onError={event => event.target.src = defaultCar} />
			</div>
		</div>
	)
}

const CompletedOrderTitle = styled.div`
	font-size: 24px;
	font-weight: 400;
	margin-bottom: 16px !important;
`

export default Total;