import React, { Component } from "react";
import { Header, RecipeForm } from "./styles/Steg1Styles";
import Steg1 from "./Steg1";
import Steg2 from "./Steg2";
import Steg3 from "./Steg3";

class NewRecipeForm extends Component {
	state = {
		title: "",
		description: [],
		tags: [],
		timeRequired: 0,
		photo: "",
		ingredients: [],
		servings: 2,
		step: 1
	};

	saveToState = e => {
		this.setState({ [e.target.name]: e.target.value });
	};

	previousStep = () => {
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
					saveIngredients={this.saveIngredients}
					ingredients={this.state.ingredients}
					servings={this.state.servings}
				/>
			);
		} else if (step === 2) {
			ActiveComponent = (
				<Steg2
					saveDescription={this.saveDescription}
					steg={step}
					previousStep={this.previousStep}
					description={this.state.description}
				/>
			);
		} else if (step === 3) {
			ActiveComponent = (
				<Steg3
					steg={step}
					previousStep={this.previousStep}
					saveDetails={this.saveDetails}
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

		return (
			<div>
				<Header>
					<input
						type="text"
						value={this.state.title}
						onChange={this.saveToState}
						name="title"
						required
						placeholder="Nytt recept..."
					/>
					<i onClick={this.editTitle} className="icofont-ui-edit" />
				</Header>
				<RecipeForm>{ActiveComponent}</RecipeForm>
			</div>
		);
	}
}

export default NewRecipeForm;
