const ExtraColor = ({changeRadioValueColor, color,}) => {
	return (
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
	)
}

export default ExtraColor;