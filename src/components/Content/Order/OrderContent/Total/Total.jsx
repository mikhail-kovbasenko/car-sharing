import styled from 'styled-components';
import { getCorrectSrcForImg } from '../../../../../utils/correctSrcForImg';
import './Total.scss';
import defaultCar from "../../../../../commons/icons/model-order-icons/default-cars.jpeg";
import Preloader from '../../../../../commons/Preloader/Preloader';
import React from 'react';

const Total = ({ model, modelInfo, completed, rentFrom, sendingLoader }) => {
	const src = getCorrectSrcForImg(model.thumbnail.path);
	
	return (
		<div className="total">
			{
				sendingLoader
					? <Preloader />
					:
					<React.Fragment>
						<div className="total__content">
							{
								completed && <CompletedOrderTitle>{"Ваш заказ подтверждён"}</CompletedOrderTitle>
							}
							<div className="total__model">{model.name}</div>
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
					</React.Fragment>

			}
		</div>
	)
}

const CompletedOrderTitle = styled.div`
	font-size: 24px;
	font-weight: 400;
	margin-bottom: 16px !important;
`

export default Total;