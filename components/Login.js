import React, { Component } from "react";
import axios from "axios";
import Router from "next/router";

class Login extends Component {
	static async getInitialProps(props) {
		console.log(props);
	}
	constructor() {
		super();
		this.state = {
			email: "hej@gmail.com",
			password: "asdf",
			message: ""
		};
	}

	saveToState = e => {
		this.setState({ [e.target.name]: e.target.value });
	};

	onSubmit = e => {
		e.preventDefault();

		const { email, password } = this.state;

		axios
			.post("http://localhost:7777/auth/login", { email, password })
			.then(result => {
				localStorage.setItem("jwtToken", result.data.token);
				console.log("Login Successsss!");
				this.setState({ message: "" });
				// this.props.url.push("/");
				Router.push("/");
			})
			.catch(error => {
				console.log(error);
			});
	};

	render() {
		return (
			<div className="container--login">
				<form onSubmit={this.onSubmit} className="form__signin">
					<h2 className="form__signin--heading">Vänligen logga in</h2>
					<label htmlFor="email">Email: </label>
					<input
						type="email"
						className="form__signin--input"
						name="email"
						value={this.state.email}
						onChange={this.saveToState}
						placeholder="hungrig@gemigmat.se"
						required
					/>
					<label htmlFor="password">Lösenord: </label>
					<input
						type="password"
						placeholder="Lösenord..."
						name="password"
						value={this.state.password}
						onChange={this.saveToState}
						required
					/>
					<button type="submit">Logga in →</button>
				</form>
			</div>
		);
	}
}

export default Login;
