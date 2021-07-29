import React from "react";
import arrow from "./../../../../commons/icons/order-navigation-icons/order-navigation-arr.svg";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const OrderNavigation = ({items, completed, orderNumber}) => {
	const getNavigationItems = items.map((item, index, array) => {
		let secondClass = item.completed ? 'completed' : null;
		
		return (
			<React.Fragment key={item.id}>
				<div className="order__navigation-item">
					<NavLink to={`/order/${item.to}`} activeClassName="order__navigation-active" className={secondClass}>{item.title}</NavLink>
				</div>
				{
					index === array.length - 1 ||
					<div className="order__navigation-arrow">
						<img src={arrow} alt="" />
					</div>
				}
			</React.Fragment>
		)
	})
	return (
		<div className="order__navigation">
			<div className="order__navigation-border">
				{
					completed ? <CompletedOrderNumber>{`Заказ номер RU${orderNumber}`}</CompletedOrderNumber>
					: getNavigationItems
				}
			</div>
		</div>
	)
}

const CompletedOrderNumber = styled.span`
	font-weight: 700;
	font-size: 14px;
`

export default OrderNavigation;