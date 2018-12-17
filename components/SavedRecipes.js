import React, { Component } from "react";
import axios from "axios";
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
				.get(`http://localhost:7777/user/hearts/${this.props.user._id}`)
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
					{recept.map(recept => (
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

export default SavedRecipes;
