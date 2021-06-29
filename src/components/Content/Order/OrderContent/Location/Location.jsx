import "./Location.scss";

const Location = () => {
	return (
		<div className="location">
			<div className="location__container">
				<div className="location__fields">
					<div className="location__labels">
						<div className="location__label">Город</div>
						<div className="location__label">Пункт выдачи</div>
					</div>
					<div className="location__elements">
						<div className="location__element">
							<input type="text" placeholder="Начните вводить город"/>
						</div>
						<div className="location__element">
							<input type="text" placeholder="Начните вводить пункт выдачи"/>
						</div>
					</div>
				</div>
				<div className="location__map">
					<div className="location__map-title">Выбрать на карте:</div>
					<div className="location__map-item"></div>
				</div>
			</div>
		</div>
	)
}

export default Location;