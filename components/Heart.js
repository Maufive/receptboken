import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";
import HeartIcon from "../svg/like-1.svg";

const HeartStyles = styled.span`
	color: ${props => (props.hearted ? props.theme.offWhite : props.theme.red)};
	background: ${props => (props.hearted ? props.theme.red : "transparent")};
	transition: 300ms all ease;
	margin-right: 3rem;
	display: flex;
	align-items: center;
	justify-content: center;
	font-weight: 700;
	cursor: pointer;
	font-size: 1rem;
	padding: 0.3rem 1rem;
	border-radius: ${props => props.theme.bRadius};
	border: 1px solid
		${props => (props.hearted ? props.theme.red : props.theme.red)};
	svg {
		margin-right: 1rem;
		height: 1.2rem;
		width: 1.2rem;
		fill: ${props => (props.hearted ? props.theme.offWhite : props.theme.red)};
	}
	&:hover {
		color: ${props => (props.hearted ? props.theme.lightgrey : props.theme.red)};
		transform: translateY(-2px);
		svg {
		fill: ${props => (props.hearted ? props.theme.lightgrey : props.theme.red)};
			
		}
		/* border: 1px solid
			${props => (props.hearted ? props.theme.grey : props.theme.red)}; */
	}
	@media (max-width: ${props => props.theme.mobileBreakpoint}) {
		margin-right: 1rem;
	};
`;

/* 
  När man klickar ett hjärta så sparas den till användarens "hearts" array i UserModel.
  Skicka en post-request med IDt som finns i props. Se till att användaren är inloggad. Om användaren inte är inloggad,
  skicka meddelande att denne måste logga in först.
*/

class Heart extends Component {
	state = {
		hearted: false
	};

	componentDidMount() {
		if (this.props.user) {
			if (this.props.user.hearts.includes(this.props.id)) {
				this.setState({ hearted: true });
			} else {
				this.setState({ hearted: false });
			}
		}
	}

	heartRecept = async () => {
		axios.defaults.headers.common["Authorization"] =
			"Bearer " + localStorage.getItem("jwtToken");
		if (localStorage.jwtToken) {
			axios
				.post(`https://receptboken.herokuapp.com/user/hearts/${this.props.id}`)
				.then(response => {
					if (response.data.hearts.includes(this.props.id)) {
						this.props.setUser(response.data);
						this.setState({ hearted: true });
						this.props.setMessage(
							"success",
							"Receptet sparades till Dina sparade recept"
						);
					} else {
						this.setState({ hearted: false });
						this.props.setUser(response.data);
						this.props.setMessage("info", "Du sparar inte längre detta recept");
					}
					// här skulle jag vilja göra en länk
					// console.log(response.data);
				})
				.catch(error => {
					this.props.setMessage("danger", "Något gick fel...");
					console.log(error);
				});
		} else {
			this.props.setMessage(
				"info",
				"Du måste vara inloggad för att spara ett recept!"
			);
			return;
		}
	};

	render() {
		const { hearted } = this.state;
		if (hearted)
			return (
				<HeartStyles hearted onClick={this.heartRecept}>
					<HeartIcon />
					Sparad
				</HeartStyles>
			);
		return (
			<HeartStyles onClick={this.heartRecept}>
				<HeartIcon />
				Spara
			</HeartStyles>
		);
	}
}

export default Heart;
