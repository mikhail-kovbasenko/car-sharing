import icon from './../icons/icon.svg'
import './Header.scss';

const Header = () => {
	return (
		<div className="header">
			<div className="mobile-menu">
			</div>
			<div className="header_row">
				<div className="header_title">Need for drive</div>
				<div className="header_city">
					<div className="header_city_icon">
						<img src={icon} alt="icon" />
					</div>
					<div className="header_city_title">Ульяновск</div>
				</div>
			</div>
		</div>
	)
}

export default Header;