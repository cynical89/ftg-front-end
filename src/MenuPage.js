import React from "react";
import Menu from "./Menu";
import { connect } from "react-redux";
import { fetchMenu } from "./actions";

class MenuPage extends React.Component {
	componentDidMount() {
		this.props.fetchMenu();
	}

	render() {
		return(
			<div>
				<h1>Menu</h1>

				<Menu menu={this.props.menu} />
			</div>
		);
	}
}

MenuPage.propTypes = {
	menu: React.PropTypes.array.isRequired,
	fetchMenu: React.PropTypes.func.isRequired
}

function mapStateToProps(state) {
	return {
		menu: state.menu
	}
}

export default connect(mapStateToProps, { fetchMenu })(MenuPage);
