import React, { Component } from "react";
import Router from "next/router";
import PropTypes from "prop-types";
import axios from "axios";
import LoadingDots from "./LoadingDots";
import Steg1 from "./Steg1";
import Steg2 from "./Steg2";
import Steg3 from "./Steg3";

class NewRecipeForm extends Component {
	static propTypes = {
		user: PropTypes.object.isRequired
	};

	state = {
		title: "",
		description: [],
		tags: [],
		timeRequired: 0,
		photo: "",
		ingredients: [],
		servings: 2,
		step: 1,
		loading: false
	};

	saveToState = e => {
		this.setState({ [e.target.name]: e.target.value });
	};

	previousStep = e => {
		e.preventDefault();
		this.setState({ step: this.state.step - 1 });
	};

	saveIngredients = (arr, servings) => {
		this.setState({
			ingredients: arr,
			servings,
			step: this.state.step + 1
		});
	};

	saveDescription = arr => {
		this.setState({
			description: arr,
			step: this.state.step + 1
		});
	};

	saveDetails = (photo, time, tags) => {
		this.setState({
			photo,
			timeRequired: time,
			tags,
			step: this.state.step + 1
		});
	};

	submitRecipe = e => {
		const {
			title,
			description,
			tags,
			timeRequired,
			photo,
			ingredients,
			servings
		} = this.state;
		this.setState({ loading: true });
		// kolla så att användaren är inloggad innan jag skickar iväg requesten

		axios
			.post("http://localhost:7777/recipe/add", {
				title,
				description,
				tags,
				timeRequired,
				photo,
				ingredients,
				servings
			})
			.then(result => {
				console.log(result);
				this.setState({
					loading: false,
					step: 1
				});
				Router.push({
					pathname: "/recept",
					query: { id: result.data.id }
				});
			})
			.catch(error => console.log(error));
	};

	render() {
		const step = this.state.step;
		let ActiveComponent;
		// För varje steg i processen att skapa ett nytt recept så renderar jag en specifik component.
		// Syftet är att dela upp en lång process att ladda upp ett recept i mindre bitar för att göra det
		// lättare för användare.
		if (step === 1) {
			ActiveComponent = (
				<Steg1
					saveToState={this.saveToState}
					title={this.state.title}
					saveIngredients={this.saveIngredients}
					ingredients={this.state.ingredients}
					servings={this.state.servings}
				/>
			);
		} else if (step === 2) {
			ActiveComponent = (
				<Steg2
					steg={step}
					previousStep={this.previousStep}
					saveDescription={this.saveDescription}
					description={this.state.description}
				/>
			);
		} else if (step === 3) {
			ActiveComponent = (
				<Steg3
					steg={step}
					previousStep={this.previousStep}
					saveDetails={this.saveDetails}
					submitRecipe={this.submitRecipe}
				/>
			);
		} else {
			ActiveComponent = <h2>Finished!</h2>;
			// To-do: Skriv en funktion för en POST-method att passa ner till steg 3. Spara Allt som finns i state här
			// till databasen.
			// Gör en LOADING komponent som snurrar medans man väntar på att databasen ska spara receptet
			// Gör en Page för ett recept där jag kan displaya informationen
			// Redirecta användaren när man lyckats spara ett recept till databasen till det receptet
		}
		if (this.state.loading) return <LoadingDots />;
		return (
			<div>
				<div>{ActiveComponent}</div>
			</div>
		);
	}
}

export default NewRecipeForm;
