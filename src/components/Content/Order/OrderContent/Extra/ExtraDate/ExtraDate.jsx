const ExtraDate = ({rentFrom, rentTo, setRentFromValue, clearInput, setRentToValue}) => {
	return (
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
	)
}

export default ExtraDate;