import './Main.scss';
import Header from '../../../commons/Header/Header';
import { NavLink } from 'react-router-dom';

const Main = () => {
	return (
		<div className="main">
			<div className="main__content">
				<div className="main__content_section">
					<Header/>
					<div className="main__content_body">
						<div className="main__content_body_row">
							<div className="main__content_body_title">
								<div className="main__content_body_title_ru">Каршеринг</div>
								<div className="main__content_body_title_eng">Need for drive</div>
							</div>
							<div className="main__content_body_description">Поминутная аренда авто твоего города</div>
							<div className="main__content_body_button">
								<NavLink to="/order/location" className="button">Забронировать</NavLink>
							</div>
						</div>
					</div>
				</div>
				<div className="main__content_footer">
					<div className="main__content_footer_row">
						<div className="main__content_footer_copy">© 2016-2019 «Need for drive»</div>
						<div className="main__content_footer_phone"><a href="#">8 (495) 234-22-44</a></div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Main;