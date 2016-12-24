import React, { Component } from "react";
import { Link, Match } from "react-router";
import MenuPage from "./MenuPage";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="ui container">
				<div className="ui two item menu">
					<Link className="item" activeClassName="active" activeOnlyWhenExact to="/">Home</Link>
					<Link className="item" activeClassName="active" activeOnlyWhenExact to="/menu">Menu</Link>
				</div>

				<Match exactly pattern="/menu" component={MenuPage} />
      </div>
    );
  }
}

export default App;
