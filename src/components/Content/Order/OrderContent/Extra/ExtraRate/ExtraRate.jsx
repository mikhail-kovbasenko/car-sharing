const ExtraRate = ({rate, changeRadioValueRate}) => {
	return (
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
	)
}

export default ExtraRate;