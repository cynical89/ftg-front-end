import React from "react";

class LoginPage extends React.Component {
	render() {
		return(
			<section className="wrapper style1">
				<div className="container">
					<div id="content">
				<h1><span className="fa fa-sign-in" /> Login</h1>
				<br />
				<div className="col-md-6">
					<a className="btn btn-block btn-social btn-lg btn-twitter" href="http://localhost:5000/auth/stripe">
						<span className="fa fa-credit-card" />
						Sign in with Stripe
					</a>
				</div>
				</div>
			</div>
		</section>
		);
	}
}

export default LoginPage;
