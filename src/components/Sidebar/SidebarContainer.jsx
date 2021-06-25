import { connect } from "react-redux"
import Sidebar from './Sidebar';

const SidebarContainer = ({sidebarItems}) => {
	return <Sidebar items={sidebarItems}/>
}

const mapStateToProps = state => {
	return {
		sidebarItems: state.sidebar.items
	}
}

export default connect(mapStateToProps)(SidebarContainer);