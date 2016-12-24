import React, { Component } from "react";
import { Link, Match } from "react-router";
import HomePage from "./HomePage";
import MenuPage from "./MenuPage";
import OrderPage from "./OrderPage";
import "./App.css";

class App extends Component {
	render() {
		return (
			<div className="ui container">
				<div className="ui three item menu">
					<Link className="item" activeClassName="active" activeOnlyWhenExact to="/">Home</Link>
					<Link className="item" activeClassName="active" activeOnlyWhenExact to="/menu">Menu</Link>
					<Link className="item" activeClassName="active" activeOnlyWhenExact to="/order">Start Order</Link>
				</div>

				<Match exactly pattern="/" component={HomePage} />
				<Match exactly pattern="/menu" component={MenuPage} />
				<Match pattern="/order" component={OrderPage} />
			</div>
		);
	}
}

export default App;
