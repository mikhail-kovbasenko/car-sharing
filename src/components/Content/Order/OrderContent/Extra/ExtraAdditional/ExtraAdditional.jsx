const ExtraAdditional = ({fuel, checkCheckboxValueBabyChair, checkCheckboxValueFuel, checkCheckboxValueRightHandDrive, babyChair, rightHandDrive}) => {
	return (
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
	)
}

export default ExtraAdditional;