import './Extra.scss';
import ExtraAdditional from './ExtraAdditional/ExtraAdditional';
import ExtraColor from './ExtraColor/ExtraColor';
import ExtraDate from './ExtraDate/ExtraDate';
import ExtraRateContainer from './ExtraRate/ExtraRateContainer';

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
				<ExtraColor color={color} changeRadioValueColor={changeRadioValueColor}/>
				<ExtraDate rentFrom={rentFrom} rentTo={rentTo} setRentFromValue={setRentFromValue} setRentToValue={setRentToValue} clearInput={clearInput}/>
				<ExtraRateContainer rate={rate} changeRadioValueRate={changeRadioValueRate}/>
				<ExtraAdditional fuel={fuel} babyChair={babyChair} rightHandDrive={rightHandDrive} checkCheckboxValueBabyChair={checkCheckboxValueBabyChair} checkCheckboxValueRightHandDrive={checkCheckboxValueRightHandDrive} checkCheckboxValueFuel={checkCheckboxValueFuel}/>
			</div>
		</div>
	)
}

export default Extra;