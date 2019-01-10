import React, { Component } from "react";
import axios from "axios";
import Link from "next/link";
import { Loading } from "./Loading";
import { CardContainer } from "./styles/Card";
import ReceptCard from "../components/ReceptCard";

class SavedRecipes extends Component {
	state = {
		recept: null
	};

	componentDidMount() {
		if (this.props.user) {
			this.getRecept();
		}
	}

	getRecept = () => {
		axios.defaults.headers.common["Authorization"] =
			"Bearer " + localStorage.getItem("jwtToken");
		if (localStorage.jwtToken) {
			axios
				.get(
					`https://receptboken.herokuapp.com/user/hearts/${this.props.user._id}`
				)
				.then(response => this.setState({ recept: response.data }))
				.catch(error => console.log(error));
		}
	};

	render() {
		const { recept } = this.state;
		if (!recept) return <Loading />;
		return (
			<div>
				<h1 style={{ textAlign: "center" }}>Dina sparade recept</h1>
				<CardContainer>
					{recept.length >= 1 &&
						recept.map(recept => (
							<ReceptCard
								id={recept._id}
								photo={recept.photo}
								timeRequired={recept.timeRequired}
								title={recept.title}
								reviews={recept.reviews}
								key={recept._id}
							/>
						))}
					{recept.length === 0 && (
						<div>
							<h2>Du har inga sparade recept ☹️</h2>
							<p>
								Gå till{" "}
								<Link href="/">
									<a style={{ textDecoration: "underline" }}>Recept</a>
								</Link>{" "}
								för att hitta nya spännande recept!
							</p>
						</div>
					)}
				</CardContainer>
			</div>
		);
	}
}

export default SavedRecipes;
