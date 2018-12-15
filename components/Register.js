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
			passwordMatch: false,
			msg: "Registrera →"
		};
	}

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
		if (passwordMatch === true) {
			axios
				.post("http://localhost:7777/auth/register", {
					email,
					password,
					fname,
					lname
				})
				.then(result => {
					this.setState({
						email: "",
						password: "",
						fname: "",
						lname: "",
						msg: "Välkommen! 🥳 🎉"
					});
					Router.push("/");
				})
				.catch(error => {
					console.log(error.response);
					this.props.setMessage("danger", error.response.data);
				});
		} else {
			this.props.setMessage("danger", "Lösenorden matchar inte");
			return;
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
							value={this.state.email}
							onChange={this.saveToState}
							required
						/>
						<label htmlFor="email">
							<MailIcon /> Email:
						</label>
					</div>
					<div>
						<input
							type="text"
							name="fname"
							value={this.state.fname}
							onChange={this.saveToState}
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
							value={this.state.lname}
							onChange={this.saveToState}
							required
						/>
						<label htmlFor="name">
							<ProfileIcon /> Efternamn:
						</label>
					</div>
					<div>
						<input
							type="password"
							name="password"
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
							value={this.state.confirmPassword}
							onChange={this.confirmPassword}
							required
						/>
						<label htmlFor="password">
							{this.state.passwordMatch ? (
								<LockIcon style={{ fill: "#15BD76" }} />
							) : (
								<LockIcon />
							)}{" "}
							Bekräfta Lösenord:
						</label>
					</div>
					{this.state.passwordMatch ? (
						<Button fullWidth primary type="submit">
							{this.state.msg}
						</Button>
					) : (
						<DisabledButton disabled fullWidth>
							{this.state.msg}
						</DisabledButton>
					)}
				</LoginForm>
			</div>
		);
	}
}

export default RegisterComponent;
