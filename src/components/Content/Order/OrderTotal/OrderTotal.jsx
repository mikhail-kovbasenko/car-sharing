import "./OrderTotal.scss";
import { NavLink } from "react-router-dom";

const OrderTotal = () => {
	return (
		<div className="order__total">
			<div className="order__total-title">Ваш заказ:</div>
			<div className="order__total-info">
				<div className="order__total-info-item">
					<div className="order__total-info-title">Пункт выдачи</div>
					<div className="order__total-info-points">......................</div>
					<div className="order__total-info-result">Ульяновск,
Нариманова 42</div>
				</div>
			</div>
			<div className="order__total-price"><span className="order__total-price-title">Цена</span>: от 8 000 до 12 000 ₽</div>
			<div className="order__total-button">
				<NavLink to="/order/model" className="button	disabled">Выбрать модель</NavLink>
			</div>
		</div>
	)
}

export default OrderTotal;