import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sendOrderData, toggleModalWindowStateActionCreator } from '../../redux/reducers/order-reducer/order-action-creators';
import './ModalWindow.scss';
import Order from './../../utils/Order';

const ModalWindow = ({toggleModal}) => {
	const dispatch = useDispatch();
	const orderState = useSelector(state => state.order);
	const appState = useSelector(state => state.app);
	const confirmOrder = useCallback(() => {
		const order = new Order({orderState, appState});

		dispatch(sendOrderData(order));
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