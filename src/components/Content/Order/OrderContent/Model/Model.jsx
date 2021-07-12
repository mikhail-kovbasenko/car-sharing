import './Model.scss';
import ModelItem from './ModelItem/ModelItem';

const Model = ({cars}) => {
	console.log(cars);
	const getModelItems = cars.map((item) => {
		return <ModelItem key={item.id} data={item}/>
	})
	return (
		<div className="model">
			<div className="model__group control-group">
				<label className="control control-radio" for="model-radio-1">
					Все модели
					<input type="radio" name="radio" id="model-radio-1"/>
					<div className="control_indicator"></div>
				</label>
				<label className="control control-radio" for="model-radio-2">
					Эконом
					<input type="radio" name="radio"  id="model-radio-2"/>
					<div className="control_indicator"></div>
				</label>
				<label className="control control-radio" for="model-radio-3">
					Премиум
					<input type="radio" name="radio"  id="model-radio-3"/>
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