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
			<section className="wrapper style1">
				<div className="container">
					<div id="content">
						<article>
							<header>
								<h2>Menu</h2>
								<Menu menu={this.props.menu} />
							</header>
						</article>
					</div>
				</div>
			</section>
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
