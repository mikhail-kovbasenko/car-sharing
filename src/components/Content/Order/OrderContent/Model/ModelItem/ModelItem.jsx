import { useRef } from "react";
import defaultCar from "./../../../../../../commons/icons/model-order-icons/default-cars.jpeg";

const ModelItem = ({data, checkedModel, clickOnCarModel}) => {
	const checked = checkedModel === data.id ? 'checked-car' : null;
	const imgRef = useRef();
	const convertImgPathInCorrect = path => {
		if(path.indexOf('base64') !== -1) return path;

		return 'https://cors-anywhere.herokuapp.com/api-factory.simbirsoft1.com/' + path;
	}
	
	const path = convertImgPathInCorrect(data.thumbnail.path)
	
	return (
		<div className={`model__list-item ${checked}`} onClick={() => clickOnCarModel(data.id)}>
			<div className="model__list-item-header">
				<div className="model__list-item-header-title">{data.name}</div>
				<div className="model__list-item-header-price">{`${data.priceMin} - ${data.priceMax} ₽`}</div>
			</div>
			<div className="model__list-item-img">
				{/* <img src={`${process.env.PUBLIC_URL}/order-cars/${data.src}`} alt={data.alt} /> */}
				<img crossOrigin="anonymous" referrerPolicy="origin" src={path} alt={data.name} onError={event => event.target.src = defaultCar} ref={imgRef}/>
			</div>
		</div>
	)
}

export default ModelItem;