import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './App.scss';
import Preloader from './commons/Preloader/Preloader';
import Content from './components/Content/Content';
import Sidebar from './components/Sidebar/Sidebar';
import { initialazedAppActionCreator } from './redux/reducers/app-reducer/app-action-creators';
import { getOrderById } from './redux/reducers/order-reducer/order-action-creators';

const App = ({history}) => {
	const init = useSelector(state => state.app.initialazed);
	const unRefresh = useSelector(state => state.order.unRefresh);
	const dispatch = useDispatch();
	
	useEffect(() => {
		dispatch(initialazedAppActionCreator());
	}, [init]);

	useEffect(() => {
		if(history.location.search !== '' && !unRefresh) {
			const query = new URLSearchParams(history.location.search);
			const id = query.get('id');
		
			dispatch(getOrderById(id));
		}
	}, [history.location.search])
	
	return (
		<div className="wrapper">
			{
				!init || (history.location.search !== '' && !unRefresh)
				? <Preloader/>
				: <React.Fragment>
						<Sidebar/>
						<Content/>
				  </React.Fragment>
			}
		</div>
	)
}

export default withRouter(App);