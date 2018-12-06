import React, { Component } from "react";
import axios from "axios";
import Router from "next/router";

class Register extends Component {
	constructor(props) {
		super();
		this.state = {
			email: "",
			password: "",
			name: "",
			message: "",
			msg: "Registrera ⟶"
		};
	}

	saveToState = e => {
		this.setState({ [e.target.name]: e.target.value });
	};

	onSubmit = e => {
		e.preventDefault();

		const { email, password, name } = this.state;

		axios
			.post("http://localhost:7777/auth/register", { email, password, name })
			.then(result => {
				this.setState({
					message: result.data.message,
					email: "",
					password: "",
					name: "",
					msg: "Välkommen! 🥳 🎉"
				});
				Router.push("/");
			})
			.catch(error => console.log(error));
	};

	render() {
		return (
			<div>
				<form onSubmit={this.onSubmit}>
					<h2>Registrera dig här:</h2>
					<label htmlFor="name">Namn: </label>
					<input
						type="text"
						name="name"
						value={this.state.name}
						onChange={this.saveToState}
						required
					/>
					<br />
					<label htmlFor="email">Email: </label>
					<input
						type="email"
						name="email"
						value={this.state.email}
						onChange={this.saveToState}
						placeholder="exempel@mail.com"
						required
					/>
					<br />
					<label htmlFor="password">Lösenord: </label>
					<input
						type="password"
						name="password"
						value={this.state.password}
						onChange={this.saveToState}
						required
					/>
					<br />
					<button type="submit">{this.state.msg}</button>
				</form>
			</div>
		);
	}
}

export default Register;
