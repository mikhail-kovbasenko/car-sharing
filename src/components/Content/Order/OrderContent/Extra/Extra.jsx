import './Extra.scss';

const Extra = ({
	changeRadioValueColor,
	color,
	rate,
	changeRadioValueRate,
	babyChair,
	fuel,
	rightHandDrive,
	checkCheckboxValueBabyChair,
	checkCheckboxValueFuel,
	checkCheckboxValueRightHandDrive,
	rentFrom,
	rentTo,
	setRentFromValue,
	setRentToValue,
	clearInput
}) => {
	return (
		<div className="extra">
			<div className="extra__content">
				<div className="extra__color">
					<div className="extra-title">Цвет</div>
					<div className="extra__color-group">
						<div className="extra__group control-group">
							<label className="control control-radio" htmlFor="extra-date-radio-1">
								<span>Любой</span>
								<input type="radio" name="extra-date-radio" id="extra-date-radio-1" value="Любой"
									onChange={changeRadioValueColor} checked={color === "Любой"} />
								<div className="control_indicator"></div>
							</label>
							<label className="control control-radio" htmlFor="extra-date-radio-2">
								<span>Красный</span>
								<input type="radio" name="extra-date-radio" checked={color === "Красный"} id="extra-date-radio-2" value="Красный" onChange={changeRadioValueColor} />
								<div className="control_indicator"></div>
							</label>
							<label className="control control-radio" htmlFor="extra-date-radio-3">
								<span>Голубой</span>
								<input type="radio" name="extra-date-radio" checked={color === "Голубой"} id="extra-date-radio-3" value="Голубой" onChange={changeRadioValueColor} />
								<div className="control_indicator"></div>
							</label>
						</div>
					</div>
				</div>
				<div className="extra__date">
					<div className="extra-title">Дата аренды</div>
					<div className="extra__date-group">
						<div className="extra__date-group-container">
							<div className="extra__date-group-from">
								<div className="extra__date-group-label">С</div>
								<div className="extra__date-group-element">
									<input type="datetime-local" placeholder="Введите дату и время" value={rentFrom} required onChange={setRentFromValue}
									/>
									<span className="extra__date-group-element-cross" data-id="from" onClick={clearInput}>&times;</span>
								</div>
							</div>
							<div className="extra__date-group-to">
								<div className="extra__date-group-label">По</div>
								<div className="extra__date-group-element">
									<input type="datetime-local" placeholder="Введите дату и время" value={rentTo} required onChange={setRentToValue}
									/>
									<span className="extra__date-group-element-cross" data-id="to" onClick={clearInput}>&times;</span>

								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="extra__rate">
					<div className="extra-title">Тариф</div>
					<div className="extra__date-group">
						<div className="extra__group control-group">
							<label className="control control-radio" htmlFor="extra-rate-1">
								Поминутно, 7₽/мин
								<input type="radio" name="extra-rate-radio" id="extra-rate-1" value="Поминутно" checked={rate === "Поминутно"} onChange={changeRadioValueRate} />
								<div className="control_indicator"></div>
							</label>
							<label className="control control-radio" htmlFor="extra-rate-2">
								На сутки, 1999 ₽/сутки
								<input type="radio" name="extra-rate-radio" id="extra-rate-2" value="На сутки" checked={rate === "На сутки"} onChange={changeRadioValueRate} />
								<div className="control_indicator"></div>
							</label>
						</div>
					</div>
				</div>
				<div className="extra__additional">
					<div className="extra-title">Доп услуги</div>
					<div className="extra__additional-group">
						<div className="extra__additional-group-element">
							<input type="checkbox" id="extra-checkbox-full" value="fuel" className="custom-checkbox" checked={fuel} onChange={checkCheckboxValueFuel} />
							<label htmlFor="">Полный бак, 500₽</label>

						</div>
						<div className="extra__additional-group-element">
							<input type="checkbox" id="extra-checkbox-full" value="babyChair" className="custom-checkbox" checked={babyChair} onChange={checkCheckboxValueBabyChair} />
							<label htmlFor="">Детское кресло, 200₽</label>
						</div>
						<div className="extra__additional-group-element">
							<input type="checkbox" id="extra-checkbox-full" value="rightHandDrive" className="custom-checkbox" checked={rightHandDrive} onChange={checkCheckboxValueRightHandDrive} />
							<label htmlFor="">Правый руль, 1600₽</label>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Extra;