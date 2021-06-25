import MenuIcon from "../../commons/MenuIcon/MenuIcon"
import './Sidebar.scss';

const Sidebar = () => {
	return (
		<div className="sidebar">
			<div className="sidebar__row">
				<div className="sidebar__item">
					<MenuIcon/>
				</div>
				<div className="sidebar__item">
					Eng
				</div>
			</div>
		</div>
	)
}

export default Sidebar;