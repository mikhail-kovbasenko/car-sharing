const ExtraRate = ({rate, rateList, changeRadioValueRate}) => {
	const getRateRadioElements = rateList.map((item, index) => {
		return (
			<label className="control control-radio" htmlFor={`extra-rate-${index}`} key={item.rateTypeId.id}>
				{`${item.rateTypeId.name}, ${item.price} ₽/${item.rateTypeId.unit}`}
				<input type="radio" 
				       name="extra-rate-radio" 
						 id={`extra-rate-${index}`} 
						 value={item.rateTypeId.id}
						 data-name={item.rateTypeId.name}
						 checked={rate === item.rateTypeId.id}
						 onChange={changeRadioValueRate}
					/>
				<div className="control_indicator"></div>
			</label>
		)
	})
	return (
		<div className="extra__rate">
			<div className="extra-title">Тариф</div>
			<div className="extra__date-group">
				<div className="extra__group control-group">
					{getRateRadioElements}
				</div>
			</div>
		</div>
	)
}

export default ExtraRate;