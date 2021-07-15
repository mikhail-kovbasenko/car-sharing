const ModelItem = ({data, checkedModel, clickOnCarModel}) => {
	const checked = checkedModel === data.id ? 'checked-car' : null;

	return (
		<div className={`model__list-item ${checked}`} onClick={() => clickOnCarModel(data.id)}>
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

export default ModelItem;