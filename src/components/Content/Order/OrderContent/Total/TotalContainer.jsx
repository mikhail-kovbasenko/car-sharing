import nextId from "react-id-generator";
import { shallowEqual, useSelector } from "react-redux";
import Total from "./Total";

const TotalContainer = () => {
	const {carsModels, checkedModel} = useSelector(state => state.order.modelData, shallowEqual);
	const completed = useSelector(state => state.order.completed);
	const orderNumber = useSelector(state => state.order.orderNumber);
	const rentFrom = useSelector(state => state.order.extraData.rentFrom);
	const {fuel, babyChair, rightHandDrive} = useSelector(state => state.order.extraData);
	const sendingLoader = useSelector(state => state.order.sendingOrderLoader);

	const formatter = new Intl.DateTimeFormat("ru", {
		day: 'numeric',
		month: 'numeric',
		year: 'numeric',
		hour: 'numeric',
		minute: 'numeric'
	})
	const rentFromFormat = formatter.format(new Date(rentFrom));

	const generateCarInfo = name => {
		const keyId = nextId();
		return (
			<div className="total__fuel" key={keyId}>
				<div className="total__fuel-title">{name}</div>
				<div className="total__fuel-procent">
					{
						name === 'Топливо'
						? '100%'
						: 'в наличии'
					}
				</div>
			</div>
		)
	}
	const getCarInfoByCheckedOptions = (fuel, babyChair, rightHandDrive) => {
		const fuelInfo = fuel ? generateCarInfo('Топливо') : null;
		const babyChairInfo = babyChair ? generateCarInfo('Детское кресло') : null;
		const rightHandDriveInfo = rightHandDrive ? generateCarInfo('Правый руль') : null;

		return [fuelInfo, babyChairInfo, rightHandDriveInfo];
	}

	const model = carsModels.find(item => item.id === checkedModel)
	const modelInfo = getCarInfoByCheckedOptions(fuel, babyChair, rightHandDrive);

	return <Total
						model={model}
						modelInfo={modelInfo}
						completed={completed}
						orderNumber={orderNumber}
						rentFrom={rentFromFormat}
						sendingLoader={sendingLoader}
					/>
}

export default TotalContainer;