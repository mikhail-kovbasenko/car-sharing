import BurgerMenu from "../../commons/BurgerMenu/BurgerMenu";
import './Sidebar.scss';
import React from "react";
import { connect } from "react-redux";

const Sidebar = ({ items }) => {
	return (
		<React.Fragment>
			<BurgerMenu items={items}/>
			<div className="sidebar">
				<div className="sidebar__row">
					<div className="sidebar__item">
						Eng
					</div>
				</div>
			</div>
		</React.Fragment>
	)
}

const mapStateToProps = state => ({
	items: state.sidebar.items
})

export default connect(mapStateToProps)(Sidebar);