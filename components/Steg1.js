import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button, DisabledButton } from "./styles/Button";
import {
	RecipeForm,
	ListItemDiv,
	Header,
	List,
	IngrediensWrapper
} from "./styles/Steg1Styles";

class Steg1Test extends Component {
	state = {
		arr: [], // en array med ingredienser
		item: {
			input: "",
			numberOfUnits: 1,
			units: "st"
		},
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

	addToArray = async e => {
		// Stoppa knappen från att skicka en request
		e.preventDefault();
		// Ta en kopia av objektet Item i state
		const item = { ...this.state.item };
		// Kolla så att det inte redan finns en likadan ingrediens sparad redan för att förhindra dubletter
		const doubles = this.state.arr.filter(ingr => ingr.input === item.input);
		if (doubles.length >= 1)
			return this.props.setMessage("info", "Du har redan en sådan i listan 🤚");
		if (item.input.length >= 2) {
			// efter state blivit sparat, töm inputfältet
			const emptyInputField = { ...this.state.item };
			emptyInputField.input = "";
			emptyInputField.numberOfUnits = 1;
			// ta en kopia av arrayen i state, och lägg till item objektet i den nya arrayen innan den sparas
			// samt tömmer inputen
			await this.setState(prevState => ({
				arr: [...prevState.arr, item],
				item: emptyInputField
			}));
		} else {
			this.props.setMessage("info", "Ingrediensen måste ha minst 2 tecken!");
			return;
		}
	};

	deleteItem = e => {
		// 1. Gör en kopia av arrayen i state
		let arr = [...this.state.arr];
		// 2. Hitta rätt item att ta bort
		let index = arr.indexOf(e);
		// 3. Ta bort itemet från arrayen
		if (index !== -1) {
			arr.splice(index, 1);
			this.setState({ arr });
		}
	};

	// leta fram objektet som ska editas, och sätt det i state
	editItem = currentItem => {
		// 1. Gör en kopia av arrayen med ingredienser i state
		let items = [...this.state.arr];
		// 2. Gör en kopia av det item jag vill ändra
		let itemIndex = items.indexOf(currentItem);
		// 3. Ta en kopia av objektet som är på den indexen
		const item = items[itemIndex];
		// 4. Sätt state med det itemet som ska editas
		this.setState({
			item,
			editing: true,
			editIndex: itemIndex
		});
	};

	saveEdit = e => {
		const { item } = this.state;
		const index = this.state.editIndex;
		e.preventDefault();
		// kolla så det finns något i inputen
		if (item.input.length >= 2) {
			// ta en kopia på arrayen i state för att modifiera
			const arr = [...this.state.arr];
			// spara över objektet i arrayen med objektet i state. Behöver index.
			arr[index] = item;
			// cleara ut inputen
			const emptyInputField = { ...item };
			emptyInputField.input = "";
			emptyInputField.numberOfUnits = 1;
			// spara.
			this.setState({
				arr,
				item: emptyInputField,
				editing: false
			});
		} else {
			this.hideShowMessage("Ingrediensen måste ha minst 2 tecken!");
		}
	};

	saveIngredient = e => {
		const item = { ...this.state.item };
		item.input = e.target.value;
		this.setState({ item });
	};

	handleUnits = e => {
		let item = { ...this.state.item };
		item.units = e.target.value;
		this.setState({ item });
	};

	saveNumberOfUnits = e => {
		const item = { ...this.state.item };
		item.numberOfUnits = e.target.value;
		this.setState({ item });
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

	saveToState = e => {
		this.setState({ [e.target.name]: e.target.value });
	};

	render() {
		const { step } = this.state;
		return (
			<RecipeForm>
				<Header>
					<input
						type="text"
						value={this.props.title}
						onChange={this.props.saveToState}
						name="title"
						required
						placeholder="Nytt recept..."
					/>
					<i className="icofont-ui-edit" />
				</Header>
				<IngrediensWrapper>
					<h3>{step}. Ingedienser</h3>
					<div>
						<label htmlFor="servings">Antal portioner: </label>
						<select value={this.state.servings} onChange={this.handleServings}>
							<option value="2">2</option>
							<option value="4">4</option>
							<option value="6">6</option>
							<option value="8">8</option>
						</select>
					</div>
					<label htmlFor="item">Fyll i ingredienser:</label>
					<input
						type="text"
						name="item"
						value={this.state.item.input}
						onChange={this.saveIngredient}
						placeholder="Spaghetti..."
					/>
					<label htmlFor="numberOfUnits">Antal: </label>
					<input
						type="number"
						name="numberOfUnits"
						value={this.state.item.numberOfUnits}
						onChange={this.saveNumberOfUnits}
						style={{
							width: 60
						}}
					/>
					<label htmlFor="units">Enhet: </label>
					<select value={this.state.item.units} onChange={this.handleUnits}>
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
				</IngrediensWrapper>
				<List>
					{this.state.arr.map(item => (
						<li key={item.input}>
							<ListItemDiv>
								<p>
									👉 <span>{item.numberOfUnits}</span> <span>{item.units}</span>{" "}
									{item.input}
								</p>
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
					<DisabledButton>
						{/* Behöver en hover-effekt för att indikera att man går vidare till nästa steg */}
						<i className="icofont-ui-next" />
						Nästa steg
					</DisabledButton>
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

export default Steg1Test;

Steg1Test.propTypes = {
	saveToState: PropTypes.func,
	toNextStep: PropTypes.func,
	ingredients: PropTypes.array,
	servings: PropTypes.number
};
