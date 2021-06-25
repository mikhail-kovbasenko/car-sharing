import MenuIcon from "../../commons/MenuIcon/MenuIcon";
import BurgerMenu from "../../commons/BurgerMenu/BurgerMenu";
import './Sidebar.scss';
import React from "react";

const Sidebar = ({ items }) => {
	return (
		<React.Fragment>
			<BurgerMenu items={items}/>
			<div className="sidebar">
				<div className="sidebar__row">
					<div className="sidebar__item">
						
					</div>
					<div className="sidebar__item">
						Eng
					</div>
				</div>
			</div>
		</React.Fragment>
	)
}

export default Sidebar;