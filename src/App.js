import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.scss';
import Preloader from './commons/Preloader/Preloader';
import Content from './components/Content/Content';
import Sidebar from './components/Sidebar/Sidebar';
import { initialazedAppActionCreator } from './redux/reducers/app-reducer/app-action-creators';

const App = () => {
	const init = useSelector(state => state.app.initialazed);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(initialazedAppActionCreator());
	}, [init]);
	
	return (
		<div className="wrapper">
			{
				!init
				? <Preloader/>
				: <React.Fragment>
						<Sidebar/>
						<Content/>
				  </React.Fragment>
			}
		</div>
	)
}

export default App;