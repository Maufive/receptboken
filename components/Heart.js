import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";

const HeartStyles = styled.span`
	color: ${props => (props.hearted ? props.theme.red : props.theme.grey)};
	transition: 300ms all ease-out;
	margin-right: 3rem;
	align-items: center;
	font-weight: 700;
	cursor: pointer;
	font-size: 1.5rem;
	padding: 0.5rem 1rem;
	border-radius: 3px;
	/* border: 1px solid
		${props => (props.hearted ? props.theme.red : props.theme.grey)}; */
	i {
		margin-right: 1rem;
	}
	&:hover {
		color: ${props => (props.hearted ? props.theme.grey : props.theme.red)};
		/* border: 1px solid
			${props => (props.hearted ? props.theme.grey : props.theme.red)}; */
	}
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
				.post(`http://localhost:7777/user/hearts/${this.props.id}`)
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
					<i className="icofont-heart-alt" />
					Sparad
				</HeartStyles>
			);
		return (
			<HeartStyles onClick={this.heartRecept}>
				<i className="icofont-heart-alt" />
				Spara
			</HeartStyles>
		);
	}
}

export default Heart;
