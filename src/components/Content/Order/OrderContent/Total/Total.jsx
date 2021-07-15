import './Total.scss';

const Total = () => {
	return (
		<div className="total">
			<div className="total__content">
				<div className="total__model">Hyndai, i30N</div>
				<div className="total__number">
					<div className="total__number-block">K 761 HA 73</div>
				</div>
				<div className="total__fuel">
					<span className="total__fuel-title">Топливо</span>
					<span className="total__fuel-procent">100%</span>
				</div>
				<div className="total__available">
					<span className="total__available-title">Доступна с</span>
					<span className="total__available-date">12.06.2019 12:00</span>
				</div>
			</div>
			<div className="total__car">
				<img src={`${process.env.PUBLIC_URL}/order-cars/image 2.jpg`} alt="" />
			</div>
		</div>
	)
}

export default Total;