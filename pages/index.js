import React, { Component } from "react";
import Link from "next/link";
import axios from "axios";
import { UserConsumer } from "../components/providers/UserProvider";
import Jumbotron from "../components/Jumbotron";
import Searchbar from "../components/Searchbar";
import { Loading } from "../components/Loading";
import { Card, CardContainer } from "../components/styles/Card";

class index extends Component {
	state = {
		user: null,
		recept: null
	};

	componentDidMount() {
		if (localStorage.jwtToken) {
			this.getUser();
		}
		this.loadRecipes();
	}

	componentDidUpdate(prevState) {
		if (this.state.user !== null) {
			this.props.setUser(this.state.user);
		}
	}

	loadRecipes = () => {
		axios
			.get("http://localhost:7777/recipe")
			.then(response => {
				this.setState({ recept: response.data });
			})
			.catch(error => {
				this.props.setMessage("danger", "Oops! Något blev knas på servern");
				console.log(error);
			});
	};

	getUser = () => {
		axios.defaults.headers.common["Authorization"] =
			"Bearer " + localStorage.getItem("jwtToken");
		if (localStorage.jwtToken) {
			axios
				.get("http://localhost:7777/user/profile")
				.then(response => {
					console.log(response.data);
					this.setState({ user: response.data });
				})
				.catch(error => {
					this.props.setMessage("danger", "Kunde inte hämta profil");
					console.log(error);
				});
		} else {
			return;
		}
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

	log = e => {
		console.log(e.target);
	};

	render() {
		if (!this.state.recept) return <Loading />;
		return (
			<div>
				<UserConsumer>
					{({ user, setUser }) => <Jumbotron user={user} setUser={setUser} />}
				</UserConsumer>
				<br />
				<Searchbar />
				<CardContainer>
					{this.state.recept.map(recept => (
						<Link key={recept._id} href={`/recept?id=${recept._id}`}>
							<a>
								<Card onClick={this.log}>
									<img src={recept.photo} alt="Bild på recept" height="250px" />
									<h3>{recept.title}</h3>
									<div>
										<span>
											<i className="icofont-clock-time" /> {recept.timeRequired}
											m
										</span>
										<span style={{ color: "#FFCF44" }}>
											{this.calcRating(recept)}{" "}
											<span style={{ color: "#393939" }}>
												({recept.reviews.length})
											</span>
										</span>
										<span style={{ color: "#fd7e69" }}>
											<i className="icofont-heart" />
										</span>
									</div>
								</Card>
							</a>
						</Link>
					))}
				</CardContainer>
			</div>
		);
	}
}

export default index;
