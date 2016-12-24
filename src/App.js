import React, { Component } from "react";
import { Link, Match } from "react-router";
import HomePage from "./HomePage";
import MenuPage from "./MenuPage";
import OrderPage from "./OrderPage";
import LoginPage from "./LoginPage";
import "./App.css";

class App extends Component {
	render() {
		return (
			<div>
			<div id="page-wrapper">
				<nav style={{textAlign: 'center'}} id="nav">
					<ul>
						<li className={(location.pathname === "/") ? "current" : ""}><Link to="/">Home</Link></li>
						<li className={(location.pathname === "/menu") ? "current" : ""}><Link to="/menu">Menu</Link></li>
						<li className={(location.pathname === "/order") ? "current" : ""}><Link to="/order">Start Order</Link></li>
						<li className={(location.pathname === "/extralink") ? "current" : ""}><Link to="/">Extra Link</Link></li>
						<li className={(location.pathname === "/signin") ? "current" : ""}><Link to="/signin">Sign In</Link></li>
					</ul>
				</nav>
			</div>

				<Match exactly pattern="/" component={HomePage} />
				<Match exactly pattern="/menu" component={MenuPage} />
				<Match pattern="/order" component={OrderPage} />
				<Match pattern="/signin" component={LoginPage} />

					<div id="footer">
						<div className="container">
							<div className="row">
							</div>
						</div>
						{/* Icons */}
						<ul className="icons">
							<li><a href="#" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
							<li><a href="#" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
							<li><a href="#" className="icon fa-github"><span className="label">GitHub</span></a></li>
							<li><a href="#" className="icon fa-linkedin"><span className="label">LinkedIn</span></a></li>
							<li><a href="#" className="icon fa-google-plus"><span className="label">Google+</span></a></li>
						</ul>
						{/* Copyright */}
						<div className="copyright">
							<ul className="menu">
								<li>© Food-To-Go. All rights reserved</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
							</ul>
						</div>
					</div>
			</div>
		);
	}
}

export default App;
