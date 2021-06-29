import React from "react";
import arrow from "./../../../../commons/icons/order-navigation-arr.svg";
import { NavLink } from "react-router-dom";

const OrderNavigation = ({items}) => {
	const getNavigationItems = items.map((item, index, array) => {
		return (
			<React.Fragment key={item.id}>
				<div className="order__navigation-item">
					<NavLink to={`/order/${item.to}`} activeClassName="order__navigation-active">{item.title}</NavLink>
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
				{getNavigationItems}
			</div>
		</div>
	)
}

export default OrderNavigation;