import React, { Component } from "react";
import axios from "axios";
import Router from "next/router";
import { LoginForm } from "./styles/ModalStyles";
import { Button } from "./styles/Button";

class Login extends Component {
	constructor() {
		super();
		this.state = {
			email: "", // hej@gmail.com
			password: "" //asdf
		};
	}

	saveToState = e => {
		this.setState({ [e.target.name]: e.target.value });
	};

	onSubmit = e => {
		e.preventDefault();
		console.log("Submitted login");
		const { email, password } = this.state;
		const { setUser, setMessage } = this.props;
		axios
			.post("http://localhost:7777/auth/login", { email, password })
			.then(result => {
				localStorage.setItem("jwtToken", result.data.token);
				console.log("JWT Token Set");
				setUser(result.data);
				setMessage("success", `Välkommen Niklas!`);
				Router.push("/");
			})
			.catch(error => {
				console.log(error);
			});
	};

	render() {
		return (
			<div>
				<LoginForm onSubmit={this.onSubmit}>
					<h2>Vänligen logga in</h2>
					<div>
						<input
							type="email"
							name="email"
							id="email"
							value={this.state.email}
							onChange={this.saveToState}
							required
						/>
						<label htmlFor="email">
							<i className="icofont-ui-email" /> Email
						</label>
					</div>
					<div>
						<input
							type="password"
							name="password"
							id="password"
							value={this.state.password}
							onChange={this.saveToState}
							required
						/>
						<label htmlFor="password">
							<i className="icofont-ui-password" /> Lösenord
						</label>
					</div>
					<Button fullWidth primary type="submit">
						Logga in →
					</Button>
				</LoginForm>
				<h3 style={{ color: "#5A5555" }}>Inget konto?</h3>
				<Button fullWidth primary>
					Registrera →
				</Button>
			</div>
		);
	}
}

export default Login;
