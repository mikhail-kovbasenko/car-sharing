import styled from "styled-components";

const ModelItem = ({data}) => {
	return (
		<div className="model__list-item">
			<div className="model__list-item-header">
				<div className="model__list-item-header-title">{data.title}</div>
				<div className="model__list-item-header-price">{`${data.min} - ${data.max} ₽`}</div>
			</div>
			<div className="model__list-item-img">
				<img src={`${process.env.PUBLIC_URL}/order-cars/${data.src}`} alt={data.alt} />
			</div>
		</div>
	)
}

const CarModel = styled.div``;

export default ModelItem;