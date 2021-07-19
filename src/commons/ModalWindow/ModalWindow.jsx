import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { confirmOrderActionCreator, toggleModalWindowStateActionCreator } from '../../redux/reducers/order';
import './ModalWindow.scss';

const ModalWindow = ({toggleModal}) => {
	const dispatch = useDispatch();
	const confirmOrder = useCallback(() => {
		dispatch(confirmOrderActionCreator());
		dispatch(toggleModalWindowStateActionCreator());
	}, [dispatch])

	return (
		<div className="modal-window">
			<div className="modal-window__content">
				<div className="modal-window__confirm">Подтвердить заказ</div>
				<div className="modal-window__buttons">
					<a href="#" className="button" onClick={confirmOrder}>Подтвердить</a>
					<a href="#" className="button button-2" onClick={toggleModal}>Вернуться</a>
				</div>
			</div>
		</div>
	)
}

export default ModalWindow;