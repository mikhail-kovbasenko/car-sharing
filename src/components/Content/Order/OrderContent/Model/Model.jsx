import './Model.scss';
import ModelItem from './ModelItem/ModelItem';

const Model = ({cars, checkedModel, clickOnCarModel, radioValue, changeRadioValue}) => {
	const getModelItems = cars.map((item) => {
		return <ModelItem key={item.id} data={item} clickOnCarModel={clickOnCarModel} checkedModel={checkedModel}/>
	})
	return (
		<div className="model">
			<div className="model__group control-group">
				<label className="control control-radio" htmlFor="model-radio-1">
					Все модели
					<input type="radio" name="radio" id="model-radio-1" value="0" checked={radioValue === 0} onChange={changeRadioValue}/>
					<div className="control_indicator"></div>
				</label>
				<label className="control control-radio" htmlFor="model-radio-2">
					Эконом
					<input type="radio" name="radio"  id="model-radio-2" value="1" checked={radioValue === 1} onChange={changeRadioValue}/>
					<div className="control_indicator"></div>
				</label>
				<label className="control control-radio" htmlFor="model-radio-3">
					Премиум
					<input type="radio" name="radio"  id="model-radio-3" value="2" checked={radioValue === 2} onChange={changeRadioValue}/>
					<div className="control_indicator"></div>
				</label>
			</div>
			<div className="model__list">
				<div className="model__list-container">
					<div className="model__list-content">
						{getModelItems}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Model;