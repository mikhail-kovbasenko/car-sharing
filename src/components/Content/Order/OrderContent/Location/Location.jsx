import "./Location.scss";

const Location = ({city, pickUp, cityList, onChangeCity, onChangePickUp, onInputCityField, inputCityRef, onInputPickUpField, pickUpPointListForInput}) => {
	const getCityList = cityList.map(city => <option value={city.name} key={city.id}/>);
	const getPickUpList = pickUpPointListForInput.map(item => <option value={`${item.name}, ${item.city_id}`} key={item.id} data-city={item.city_id}/>);
	
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
							<input type="text" placeholder="Начните вводить город" 
													 value={city}
													 onChange={onChangeCity}
													 list="city-list"	 
													 onInput={onInputCityField}
													 ref={inputCityRef}
												/>
							<datalist id="city-list">
								{getCityList}
							</datalist>
						</div>
						<div className="location__element">
							<input type="text" placeholder="Начните вводить пункт выдачи"
													 value={pickUp}
													 list="pick-up-list"
													 onChange={onChangePickUp} 
													 onInput={onInputPickUpField}
													 list="pickup-list"
												/>
							<datalist id="pickup-list">
								{getPickUpList}
							</datalist>

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