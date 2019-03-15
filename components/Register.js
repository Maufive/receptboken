import React, { Component } from "react";
import axios from "axios";
import Router from "next/router";
import { LoginForm } from "./styles/ModalStyles";
import { Button, DisabledButton } from "./styles/Button";
import MailIcon from "../svg/mail.svg";
import LockIcon from "../svg/lock.svg";
import ProfileIcon from "../svg/profile.svg";

class RegisterComponent extends Component {
	constructor(props) {
		super();
		this.state = {
			fname: "",
			lname: "",
			email: "",
			password: "",
			confirmPassword: "",
			passwordMatch: false
		};
	}

	login = (email, password) => {
		axios
			.post(`https://receptboken.herokuapp.com/auth/login`, { email, password })
			.then(result => {
				localStorage.setItem("jwtToken", result.data.token);
				console.log("JWT Token Set");
				console.log(result.data);
				console.log(this.props.setUser);
				this.props.setUser(result.data.user);
				this.props.setMessage(
					"success",
					`👋 Välkommen ${result.data.user.fname}!`
				);
				Router.push("/");
			})
			.catch(error => {
				console.log(error);
				console.log(error.response.data.message);
				this.setState({ error: error.response.data.message });
			});
	};

	saveToState = e => {
		this.setState({ [e.target.name]: e.target.value });
	};

	password = async e => {
		await this.setState({ password: e.target.value });
		this.checkPassword();
	};

	confirmPassword = async e => {
		await this.setState({ confirmPassword: e.target.value });
		this.checkPassword();
	};

	checkPassword = () => {
		const { password, confirmPassword } = this.state;
		if (password === confirmPassword && password.length) {
			this.setState({ passwordMatch: true });
		} else {
			this.setState({ passwordMatch: false });
		}
	};

	onSubmit = e => {
		e.preventDefault();

		const { email, password, passwordMatch, fname, lname } = this.state;
		if (passwordMatch) {
			axios
				.post("https://receptboken.herokuapp.com/auth/register", {
					email,
					password,
					fname,
					lname
				})
				.then(result => {
					this.login(email, password);
					this.setState({
						email: "",
						password: "",
						fname: "",
						lname: ""
					});
				})
				.catch(error => {
					console.log(error.response);
					this.props.setMessage("danger", error.response.data);
				});
		}

		if (!passwordMatch) {
			this.props.setMessage("danger", "Lösenorden matchar inte!");
			throw new Error("urk på burk");
		}
	};

	render() {
		return (
			<div style={{ width: "0 auto" }}>
				<LoginForm onSubmit={this.onSubmit}>
					<h2>Registrera dig här:</h2>
					<div>
						<input
							type="email"
							name="email"
							id="email"
							value={this.state.email}
							onChange={this.saveToState}
							required
						/>
						<label htmlFor="email" for="email">
							<MailIcon /> Email:
						</label>
					</div>
					<div>
						<input
							type="text"
							name="fname"
							value={this.state.fname}
							onChange={this.saveToState}
							id="fname"
							required
						/>
						<label htmlFor="name">
							<ProfileIcon /> Förnamn:
						</label>
					</div>
					<div>
						<input
							type="text"
							name="lname"
							id="lname"
							value={this.state.lname}
							onChange={this.saveToState}
							required
						/>
						<label htmlFor="lname">
							<ProfileIcon /> Efternamn:
						</label>
					</div>
					<div>
						<input
							type="password"
							name="password"
							id="password"
							value={this.state.password}
							onChange={this.password}
							required
						/>
						<label htmlFor="password">
							{this.state.passwordMatch ? (
								<LockIcon style={{ fill: "#15BD76" }} />
							) : (
								<LockIcon />
							)}{" "}
							Lösenord:
						</label>
					</div>
					<div>
						<input
							type="password"
							name="password"
							id="confirmPassword"
							value={this.state.confirmPassword}
							onChange={this.confirmPassword}
							required
						/>
						<label htmlFor="password" for="confirmPassword">
							{this.state.passwordMatch ? (
								<LockIcon style={{ fill: "#15BD76" }} />
							) : (
								<LockIcon />
							)}{" "}
							Bekräfta Lösenord:
						</label>
					</div>
					{this.state.passwordMatch ? (
						<Button fullWidth primary type="submit" id="submit-button">
							Registrera →
						</Button>
					) : (
						<DisabledButton disabled fullWidth>
							Registrera →
						</DisabledButton>
					)}
				</LoginForm>
			</div>
		);
	}
}

export default RegisterComponent;
