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
					<div>
						<AvatarContainer>
							{user.photo ? (
								<img src={user.photo} alt="user image" />
							) : (
								<ChefIcon />
							)}
						</AvatarContainer>
					</div>
					<div>
						<h1>{user.fname + " " + user.lname}</h1>
						<h2>Om mig:</h2>
						{user.description ? (
							<p>{user.description}</p>
						) : (
							<div>
								{this.props.user ? (
									this.props.user._id !== user._id ? (
										<div>
											<p>
												{user.fname} har inte lagt till någon beskrivning
												ännu...
											</p>
										</div>
									) : (
										<div>
											<p>Du har inte lagt till någon beskrivning ännu...</p>
										</div>
									)
								) : null}
							</div>
						)}
					</div>
					<div
						style={{
							marginTop: "5rem"
						}}
					>
						{this.props.user && this.props.user._id === user._id ? (
							<Link
								href={{
									pathname: "/edit-profile",
									query: {
										id: user._id
									}
								}}
							>
								<a
									style={{
										color: "black",
										textDecoration: "underline"
									}}
								>
									Klicka här för att ändra din profil →
								</a>
							</Link>
						) : null}
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
						{recept && recept.length < 1 && (
							<div>
								<h3>
									{this.props.user ? "Du" : user.fname} har inte laddat upp
									några recept ännu... 😞
								</h3>
								{this.props.user._id === user._id ? (
									<Link href="/recipe">
										<a>
											<Button>Klicka här för att ladda upp ett recept →</Button>
										</a>
									</Link>
								) : null}
							</div>
						)}
					</CardContainer>
				</div>
			</ProfileContainer>
		);
	}
}

export default profile;
