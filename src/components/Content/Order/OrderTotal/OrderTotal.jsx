import "./OrderTotal.scss";
import { Route, Switch } from "react-router-dom";
import nextId from 'react-id-generator';
import reactDom from "react-dom";
import ModalWindow from "../../../../commons/ModalWindow/ModalWindow";

const OrderTotal = ({renderBtn, navItems, modelData, extraData, isModalOpen, locationData, toggleModal, rentFrom, rentTo, calculateRent}) => {
	const getTotalInfoItem = data => {
		return (
			<div className="order__total-info-item">
				<div className="order__total-info-title">{data.title}</div>
				<div className="order__total-info-points">
					<div className="order__total-info-points__item">
						{
							'...'.repeat(100)
						}
					</div>
				</div>
				<div className="order__total-info-result">{data.result}</div>
			</div>
		)
	}
	return (
		<div className="order__total">
			<div className="order__total-title">Ваш заказ:</div>
			<div className="order__total-info">
				{
					locationData.locationCompleted && getTotalInfoItem({title: 'Пункт выдачи', result: locationData.address})
				}
				{
					modelData.model && modelData.modelCompleted && getTotalInfoItem({title: 'Модель', result: modelData.model.title})
				}
				{
					extraData.color && extraData.extraCompleted && getTotalInfoItem({title: 'Цвет', result: extraData.color})
				}
				{
					extraData.extraCompleted && getTotalInfoItem({title: 'Длительность аренды', result: calculateRent(rentFrom, rentTo)})
				}
				{
					extraData.rate && extraData.extraCompleted && getTotalInfoItem({title: 'Тариф', result: extraData.rate})
				}
				{
					extraData.fuel && extraData.extraCompleted && getTotalInfoItem({title: 'Топливо', result: 'Да'})
				}
				{
					extraData.babyChair && extraData.extraCompleted && getTotalInfoItem({title: 'Детское кресло', result: 'Да'})
				}
				{
					extraData.rightDrive && extraData.extraCompleted && getTotalInfoItem({title: 'Правый руль', result: 'Да'})
				}
			</div>
			<div className="order__total-price"><span className="order__total-price-title">Цена</span>: от 8 000 до 12 000 ₽</div>
			<div className="order__total-button">
				<Switch>
					{
						navItems.map((item, index, array) => {
							const elem = array.find(el => el.id === item.nextPage);
							const keyId = nextId();
							if(!elem) return <Route path="/order/total" key={keyId} render={() => renderBtn('Заказать', 'total', null )}/>

							const {to, title} = elem;
							
							return <Route path={`/order/${item.to}`} 
										     render={() => renderBtn(title, to, item.id)}
											  key={keyId}
											/>
						})
					}
				</Switch>
				{
					isModalOpen && reactDom.createPortal(
						<ModalWindow toggleModal={toggleModal}/>,
						document.getElementById('modal')
					)
				}
			</div>
		</div>
	)
}

export default OrderTotal;