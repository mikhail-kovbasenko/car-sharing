import styled from 'styled-components';
import './Total.scss';

const Total = ({model, modelNum, modelInfo, completedпше, rentFrom}) => {
	return (
		<div className="total">
			<div className="total__content">
				{
					completed && <CompletedOrderTitle>{"Ваш заказ подтверждён"}</CompletedOrderTitle>
				}
				<div className="total__model">{model.title}</div>
				<div className="total__number">
					<div className="total__number-block">{modelNum}</div>
				</div>
				{modelInfo}
				<div className="total__available">
					<span className="total__available-title">Доступна с</span>
					<span className="total__available-date">{rentFrom}</span>
				</div>
			</div>
			<div className="total__car">
				<img src={`${process.env.PUBLIC_URL}/order-cars/${model.src}`} alt="" />
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