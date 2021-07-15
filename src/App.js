import './App.scss';
import Content from './components/Content/Content';
import SidebarContainer from './components/Sidebar/SidebarContainer';

const App = () => {
	return (
		<div className="wrapper">
			<SidebarContainer/>
			<Content/>
		</div>
	)
}

export default App;