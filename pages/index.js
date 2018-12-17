import React, { Component } from "react";
import axios from "axios";
import { UserConsumer } from "../components/providers/UserProvider";
import Jumbotron from "../components/Jumbotron";
import Searchbar from "../components/Searchbar";
import ReceptCard from "../components/ReceptCard";
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

	// componentDidUpdate(prevState) {
	// 	if (this.state.user !== prevState.user) {
	// 		this.props.setUser(this.state.user);
	// 	}
	// }

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
					// console.log(response.data.user);
					this.setState({ user: response.data.user });
				})
				.catch(error => {
					this.props.setMessage("danger", "Kunde inte hämta profil");
					console.log(error);
				});
		} else {
			return;
		}
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
						<ReceptCard
							id={recept._id}
							photo={recept.photo}
							timeRequired={recept.timeRequired}
							title={recept.title}
							reviews={recept.reviews}
							key={recept._id}
						/>
					))}
				</CardContainer>
			</div>
		);
	}
}

export default index;
