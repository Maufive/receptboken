import React, { Component } from "react";
import axios from "axios";
import Link from "next/link";
import { LoginForm } from "./styles/ModalStyles";
import { Button } from "./styles/Button";
import LockIcon from "../svg/lock.svg";
import MailIcon from "../svg/mail.svg";

class Login extends Component {
	constructor() {
		super();
		this.state = {
			email: "", // hej@gmail.com .. test6@gmail.com ..
			password: "", //asdf
			error: null
		};
	}

	saveToState = e => {
		this.setState({ [e.target.name]: e.target.value });
	};

	onSubmit = e => {
		e.preventDefault();
		const { email, password } = this.state;
		const { setUser, setMessage } = this.props;
		axios
			.post(`https://receptboken.herokuapp.com/auth/login`, { email, password })
			.then(result => {
				localStorage.setItem("jwtToken", result.data.token);
				setUser(result.data.user);
				setMessage("success", `Välkommen ${result.data.user.fname}!`);
				// Router.push("/");
			})
			.catch(error => {
				console.log(error.response.data.message);
				this.setState({ error: error.response.data.message });
			});
	};

	render() {
		return (
			<div style={{ margin: "0 auto" }}>
				<LoginForm onSubmit={this.onSubmit}>
					{this.state.error ? (
						<h4 style={{ color: "#bc1616", marginBottom: "2.5rem" }}>
							{this.state.error}
						</h4>
					) : (
						<h2>Vänligen logga in</h2>
					)}
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
							<MailIcon /> Email
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
							<LockIcon /> Lösenord
						</label>
					</div>
					<Button fullWidth type="submit" id="login-button">
						Logga in →
					</Button>
					<h3 style={{ color: "#5A5555" }}>Inget konto?</h3>
					<Link href="/register">
						<a>
							<Button
								fullWidth
								primary
								id="register-button"
								onClick={this.props.closeModal}
							>
								Registrera →
							</Button>
						</a>
					</Link>
				</LoginForm>
			</div>
		);
	}
}

export default Login;
