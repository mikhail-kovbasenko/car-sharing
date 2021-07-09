import './App.scss';
import Content from './components/Content/Content';
import Sidebar from './components/Sidebar/Sidebar';

const App = () => {
	return (
		<div className="wrapper">
			<Sidebar/>
			<Content/>
		</div>
	)
}

export default App;