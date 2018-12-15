import React, { Component } from "react";
import axios from "axios";
import Router from "next/router";
import Link from "next/link";
import styled from "styled-components";
import { Loading } from "../components/Loading";
import { Button } from "../components/styles/Button";
import ReceptCard from "../components/ReceptCard";
import { CardContainer } from "../components/styles/Card";
import { fadeIn } from "../components/styles/keyframes";
import ChefIcon from "../svg/chef.svg";

const ProfileContainer = styled.div`
	margin: 0 auto;
	width: 1000px;
	background: ${props => props.theme.white};
	color: ${props => props.theme.grey};
	animation: ${fadeIn} 500ms ease-out;
	> div > img {
		height: 100px;
		width: 100px;
		border-radius: 50%;
	}
`;

const ProfileDescription = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
`;

const AvatarContainer = styled.div`
	border-radius: 50%;
	border: 3px solid ${props => props.theme.grey};
	height: 125px;
	width: 125px;
	display: flex;
	justify-content: center;
	align-items: center;
	overflow: hidden;
	svg {
		fill: ${props => props.theme.grey};
		height: 100px;
		width: 100px;
	}
`;

class profile extends Component {
	state = {
		recept: null
	};

	componentDidMount() {
		if (!this.props.user) {
			this.props.setMessage("danger", "Vänligen logga in för visa profil");
			Router.push("/");
		}
		this.getRecipes();
	}

	getRecipes = () => {
		// Hämta alla recept som användaren har skapat
		axios
			.get(`http://localhost:7777/user/created/${this.props.user._id}`)
			.then(response => {
				this.setState({ recept: response.data });
			})
			.catch(error => {
				console.log(error);
			});
	};

	render() {
		const user = this.props.user;
		const { recept } = this.state;
		if (!user) return <Loading />;
		return (
			<ProfileContainer>
				<ProfileDescription>
					<AvatarContainer>
						<ChefIcon />
					</AvatarContainer>
					<div style={{ width: "50%" }}>
						<h1>{user.fname + " " + user.lname}</h1>
						<p>
							Kanske en kort beskrivning här som man kan fylla i om man vill.
							Här kan man skriva något om vilken typ av mat man gillar och
							varför. Eller något annat, ganska frivilligt faktiskt.
						</p>
					</div>
				</ProfileDescription>
				<CardContainer>
					<h2 style={{ margin: "0" }}>Dina recept:</h2>
					{recept && recept.length >= 1 && (
						<ReceptCard
							id={recept._id}
							photo={recept.photo}
							timeRequired={recept.timeRequired}
							title={recept.title}
							reviews={recept.reviews}
							key={recept._id}
							small
						/>
					)}
					{recept && recept.length < 1 && (
						<div>
							<h3>Du har inte laddat upp några recept ännu... 😞</h3>
							<Link href="/recipe">
								<a>
									<Button>Klicka här för att ladda upp ett recept →</Button>
								</a>
							</Link>
						</div>
					)}
				</CardContainer>
			</ProfileContainer>
		);
	}
}

export default profile;
