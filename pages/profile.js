import React, { Component } from "react";
import axios from "axios";
import Router from "next/router";
import Link from "next/link";
import { Loading } from "../components/Loading";
import { Button } from "../components/styles/Button";
import ReceptCard from "../components/ReceptCard";
import { CardContainer } from "../components/styles/Card";
import {
	ProfileContainer,
	ProfileDescription,
	AvatarContainer
} from "../components/styles/ProfileStyles";
import ChefIcon from "../svg/chef.svg";

class profile extends Component {
	state = {
		recept: null,
		user: null
	};

	async componentDidMount() {
		if (!this.props.user) {
			this.props.setMessage("danger", "Vänligen logga in för visa profil");
			Router.push("/");
		}
		await this.getUser();
	}

	getUser = async () => {
		const id = this.props.query.id;
		await axios
			.get(`http://localhost:7777/user/profile/author/${id}`)
			.then(response => this.setState({ user: response.data }))
			.catch(error => console.log(error));
		this.getRecipes();
	};

	getRecipes = () => {
		// Hämta alla recept som användaren har skapat
		axios
			.get(`http://localhost:7777/user/created/${this.state.user._id}`)
			.then(response => {
				this.setState({ recept: response.data });
			})
			.catch(error => {
				console.log(error);
			});
	};

	render() {
		const { recept, user } = this.state;
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
				<div>
					<h2 style={{ textAlign: "center" }}>Uppladdade recept:</h2>
					<CardContainer style={{ marginTop: "0", paddingTop: "0" }}>
						{recept &&
							recept.length >= 1 &&
							recept.map(recept => (
								<ReceptCard
									id={recept._id}
									photo={recept.photo}
									timeRequired={recept.timeRequired}
									title={recept.title}
									reviews={recept.reviews}
									key={recept._id}
									small
								/>
							))}
					</CardContainer>
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
				</div>
			</ProfileContainer>
		);
	}
}

export default profile;
