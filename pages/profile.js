import React, { Component } from "react";
import axios from "axios";
import Router from "next/router";
import Link from "next/link";
import styled from "styled-components";
import { Loading } from "../components/Loading";
import { fadeIn } from "../components/styles/keyframes";
import { SmallCard, CardContainer } from "../components/styles/Card";

const DisplayProfile = styled.div`
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

	calcRating = recept => {
		const reviews = recept.reviews;
		let total = 0;
		reviews.map(review => {
			total += review.rating;
		});
		const average = total / reviews.length;
		const rounded = Math.floor(Math.round(average));
		const stars = "★".repeat(rounded);
		const emptyStars = "☆".repeat(5 - rounded);
		return stars.concat(emptyStars);
	};

	render() {
		const user = this.props.user;
		if (!user) return <Loading />;
		return (
			<DisplayProfile>
				<div
					style={{
						display: "flex",
						justifyContent: "space-around",
						alignItems: "center"
					}}
				>
					<img
						src="https://img.icons8.com/metro/100/000000/gender-neutral-user.png"
						alt="User profile"
					/>
					<div style={{ width: "50%" }}>
						<h1>{user.fname + " " + user.lname}</h1>
						<p>
							Kanske en kort beskrivning här som man kan fylla i om man vill.
							Här kan man skriva något om vilken typ av mat man gillar och
							varför. Eller något annat, ganska frivilligt faktiskt.
						</p>
					</div>
				</div>
				<h2>Niklas recept</h2>
				{this.state.recept && (
					<CardContainer>
						{this.state.recept.map(recept => (
							<Link
								key={recept._id}
								href={{
									pathname: "/recept",
									query: {
										id: recept._id
									}
								}}
							>
								<a>
									<SmallCard>
										<img
											src={recept.photo}
											alt="Bild på recept"
											width="200px"
										/>
										<div>
											<h4>{recept.title}</h4>
											<span style={{ color: "#FFCF44" }}>
												{this.calcRating(recept)}{" "}
												<span style={{ color: "#393939" }}>
													({recept.reviews.length})
												</span>
											</span>
										</div>
									</SmallCard>
								</a>
							</Link>
						))}
					</CardContainer>
				)}
			</DisplayProfile>
		);
	}
}

export default profile;
