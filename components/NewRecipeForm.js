import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";
import Steg1 from "./Steg1";
import Steg1Test from "./Steg1Test";
import Steg2 from "./Steg2";

const Header = styled.div`
	width: 600px;
	margin: 0 auto;
	padding: 1rem;
	input[type="text"] {
		font-size: 3rem;
		border: none;
		border-bottom: 1px solid ${props => props.theme.lightgrey};
		outline: none;
	}
	input[type="text"]:focus {
		border-bottom: 1px solid ${props => props.theme.green};
	}
`;

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

	render() {
		const step = this.state.step;
		let ActiveComponent;
		// För varje steg i processen att skapa ett nytt recept så renderar jag en specifik component.
		// Syftet är att dela upp en lång process att ladda upp ett recept i mindre bitar för att göra det
		// lättare för användare.
		if (step === 1) {
			ActiveComponent = (
				<Steg1Test
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
					steg={this.state.step}
					previousStep={this.previousStep}
					description={this.state.description}
				/>
			);
		} else {
			ActiveComponent = <p>Steg 3</p>;
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
				{ActiveComponent}
			</div>
		);
	}
}

export default NewRecipeForm;
