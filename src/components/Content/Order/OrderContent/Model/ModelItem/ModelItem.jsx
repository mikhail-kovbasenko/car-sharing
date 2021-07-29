import { getCorrectSrcForImg } from "../../../../../../utils/correctSrcForImg";
import defaultCar from "./../../../../../../commons/icons/model-order-icons/default-cars.jpeg";

const ModelItem = ({data, checkedModel, clickOnCarModel}) => {
	const checked = checkedModel === data.id ? 'checked-car' : null;
	const path = getCorrectSrcForImg(data.thumbnail.path)
	
	return (
		<div className={`model__list-item ${checked}`} onClick={() => clickOnCarModel(data.id)}>
			<div className="model__list-item-header">
				<div className="model__list-item-header-title">{data.name}</div>
				<div className="model__list-item-header-price">{`${data.priceMin} - ${data.priceMax} ₽`}</div>
			</div>
			<div className="model__list-item-img">
				<img crossOrigin="anonymous" referrerPolicy="origin" src={path} alt={data.name} onError={event => event.target.src = defaultCar}/>
			</div>
		</div>
	)
}

export default ModelItem;