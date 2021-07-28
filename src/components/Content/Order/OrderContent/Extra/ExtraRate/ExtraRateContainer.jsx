import { useSelector } from "react-redux"
import ExtraRate from "./ExtraRate";

const ExtraRateContainer = ({rate, changeRadioValueRate}) => {
	const rateList = useSelector(state => state.app.rateList);

	return <ExtraRate rateList={rateList} rate={rate} changeRadioValueRate={changeRadioValueRate}/>
}

export default ExtraRateContainer;

