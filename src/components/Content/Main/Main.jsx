import './Main.scss';
import icon from './../../../commons/icons/icon.svg';
import menu_icon from './../../../commons/icons/menu-icon.svg';
import MenuIcon from '../../../commons/MenuIcon/MenuIcon';

const Main = () => {
	return (
		<div className="main">
			<div className="main__content">
				<div className="main__content_section">
					<div className="main__content_header">
						<div className="main__content_mobile-menu">
							<MenuIcon/>
						</div>
						<div className="main__content_header_row">
							<div className="main__content_header_title">Need for drive</div>
							<div className="main__content_header_city">
								<div className="main__content_header_city_icon">
									<img src={icon} alt="icon" />
								</div>
								<div className="main__content_header_city_title">Ульяновск</div>
							</div>
						</div>
					</div>
					<div className="main__content_body">
						<div className="main__content_body_row">
							<div className="main__content_body_title">
								<div className="main__content_body_title_ru">Каршеринг</div>
								<div className="main__content_body_title_eng">Need for drive</div>
							</div>
							<div className="main__content_body_description">Поминутная аренда авто твоего города</div>
							<div className="main__content_body_button">
								<a href="#" className="button">Забронировать</a>
							</div>
						</div>
					</div>
				</div>
				<div className="main__content_footer">
					<div className="main__content_footer_row">
						<div className="main__content_footer_copy">© 2016-2019 «Need for drive»</div>
						<div className="main__content_footer_phone">8 (495) 234-22-44</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Main;