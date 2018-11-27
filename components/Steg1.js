import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button } from "./styles/Button";
import { RecipeForm, ListItemDiv, List } from "./styles/Steg1Styles";

class Steg1 extends Component {
	state = {
		arr: [], // en array med ingredienser
		item: "",
		numberOfUnits: 1,
		units: "st",
		servings: 2,
		step: 1,
		editing: false,
		editIndex: null
	};

	componentDidMount() {
		this.setState({
			arr: this.props.ingredients,
			servings: this.props.servings
		});
	}

	// Tar strängen som ligger i den tillfälliga propertyn "item", sen med ES6 Spread så tar jag en kopia
	// av this.state.arr och lägger till värdet som är i "item". Måste göra en kopia av state innan jag modifierar
	// då man inte ska modifiera state direkt.
	addToArray = e => {
		const { numberOfUnits, item, units } = this.state;
		e.preventDefault();
		if (item.length >= 2) {
			const number = numberOfUnits.toString();
			const string = number + " " + units.toLowerCase().concat(" ", item); // oldschool JS btw
			this.setState(prevState => ({
				arr: [...prevState.arr, string],
				item: "",
				numberOfUnits: 1
			}));
		} else {
			console.log("Too short!");
		}
	};

	deleteItem = e => {
		// 1. Gör en kopia av arrayen i state
		let arr = [...this.state.arr];
		// 2. Hitta rätt item att ta bort
		let index = arr.indexOf(e);
		// 3.
		if (index !== -1) {
			arr.splice(index, 1);
			this.setState({ arr });
		}
	};

	editItem = currentItem => {
		// 1. Gör en kopia av state
		let items = [...this.state.arr];
		// 2. Gör en kopia av det item jag vill ändra
		let itemIndex = items.indexOf(currentItem);
		// 3. Ändra item
		console.log(itemIndex);
		this.setState({
			item: items[itemIndex],
			editing: true,
			editIndex: itemIndex
		});
	};

	saveEdit = e => {
		e.preventDefault();
		const { numberOfUnits, item, units, editIndex } = this.state;
		// kolla så det finns något i inputen
		if (item.length >= 2) {
			// gör om numret till en sträng för att sammansätta allt till en sträng
			const number = numberOfUnits.toString();
			const string = number + " " + units.toLowerCase().concat(" ", item);
			// ta en kopia på arrayen i state för att modifiera
			const newArr = [...this.state.arr];
			// ta den redigerade strängen och tryck in den på det index i arrayen som jag hämtat från editItem funktionen
			newArr[editIndex] = string;
			// spara.
			this.setState({
				arr: newArr,
				item: "",
				numberOfUnits: 1,
				editing: false
			});
		} else {
			console.log("Too short!");
		}
	};

	saveToState = e => {
		this.setState({ [e.target.name]: e.target.value });
	};

	handleUnits = e => {
		this.setState({ units: e.target.value });
	};

	handleServings = e => {
		this.setState({ servings: e.target.value });
	};

	// Sätter state i parent-component med värdet för alla ingredienser. Detta kommer göra att denna component unmountar och en
	// component för nästa steg kommer att mountas istället.
	nextStep = e => {
		e.preventDefault();
		this.props.saveIngredients(this.state.arr, this.state.servings);
	};

	render() {
		return (
			<RecipeForm>
				<h3>{this.state.step}. Ingedienser</h3>
				<div>
					<label htmlFor="servings">Antal portioner: </label>
					<select value={this.state.servings} onChange={this.handleServings}>
						<option value="2">2</option>
						<option value="4">4</option>
						<option value="6">6</option>
						<option value="8">8</option>
					</select>
				</div>
				<div>
					<label htmlFor="item">Fyll i ingredienser:</label>
					<br />
					<input
						type="text"
						name="item"
						value={this.state.item}
						onChange={this.saveToState}
						placeholder="Spaghetti..."
					/>
					<label htmlFor="numberOfUnits">Antal: </label>
					<input
						type="number"
						name="numberOfUnits"
						value={this.state.numberOfUnits}
						onChange={this.saveToState}
						style={{
							width: 60
						}}
					/>
					<label htmlFor="units">Enhet: </label>
					<select value={this.state.units} onChange={this.handleUnits}>
						<option defaultValue="st">Styck</option>
						<option value="gram">Gram</option>
						<option value="msk">Matsked</option>
						<option value="tsk">Tesked</option>
						<option value="dl">Deciliter</option>
					</select>
					{/* Om användaren redigerar ett item, ändra knappen till Ändra istället för Lägg till */}
					<div>
						{this.state.editing ? (
							<Button onClick={e => this.saveEdit(e, this.state.editIndex)}>
								<i className="icofont-ui-edit" />
								Ändra
							</Button>
						) : (
							<Button onClick={this.addToArray}>
								<i className="icofont-plus" />
								Lägg till
							</Button>
						)}
					</div>
				</div>
				<List>
					{this.state.arr.map(item => (
						<li key={item}>
							<ListItemDiv>
								<p>👉 {item}</p>
								<div>
									<i
										onClick={() => this.deleteItem(item)}
										className="icofont-trash"
									/>
									<i
										onClick={() => this.editItem(item)}
										className="icofont-edit"
									/>
								</div>
							</ListItemDiv>
						</li>
					))}
				</List>
				{this.state.arr.length <= 1 && (
					<Button disabled>
						{/* Behöver en hover-effekt för att indikera att man går vidare till nästa steg */}
						<i className="icofont-ui-next" />
						Nästa steg
					</Button>
				)}
				{this.state.arr.length >= 2 && (
					<Button primary onClick={this.nextStep}>
						{/* Behöver en hover-effekt för att indikera att man går vidare till nästa steg */}
						<i className="icofont-ui-next" />
						Nästa steg
					</Button>
				)}
			</RecipeForm>
		);
	}
}

export default Steg1;

Steg1.propTypes = {
	saveToState: PropTypes.func,
	toNextStep: PropTypes.func,
	ingredients: PropTypes.array,
	servings: PropTypes.number
};
