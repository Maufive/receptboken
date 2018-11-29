import React, { Component } from "react";
import PropTypes from "prop-types";
import { RecipeForm, List, ListItemDiv } from "./styles/Steg1Styles";
import { Button, DisabledButton } from "./styles/Button";
import { InfoMessage } from "./Message";

class Steg2 extends Component {
	state = {
		arr: [],
		string: "Sätt på ugnen",
		step: 1,
		editing: false,
		editIndex: null,
		message: null
	};

	componentDidMount() {
		this.setState({
			arr: this.props.description
		});
	}

	hideShowMessage = message => {
		this.setState({ message });
		setTimeout(() => {
			this.setState({ message: null });
		}, 3990);
	};

	addToArray = e => {
		const { string, step } = this.state;
		e.preventDefault();

		if (string.length >= 5) {
			const steg = `Steg ${step}: `;
			const completeString = steg.concat(" ", string);

			this.setState(prevState => ({
				arr: [...prevState.arr, completeString],
				step: step + 1,
				string: ""
			}));
		} else {
			this.hideShowMessage("Du måste skriva minst 5 bokstäver");
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
		this.setState({
			string: items[itemIndex],
			editing: true,
			editIndex: itemIndex
		});
		this.hideShowMessage('Du kan nu ändra!')
	};

	saveEdit = e => {
		e.preventDefault();
		const { string } = this.state;
		const index = this.state.editIndex;
		const steg = `Steg ${index + 1}: `;
		const completeString = steg.concat(" ", string);
		// kolla så det finns något i inputen
		if (string.length >= 2) {
			// ta en kopia på arrayen i state för att modifiera
			const newArr = [...this.state.arr];
			// ta den redigerade strängen och tryck in den på det index i arrayen som jag hämtat från editItem funktionen
			newArr[index] = completeString;
			// spara.
			this.setState({
				arr: newArr,
				string: "",
				editing: false,
				message: null
			});
		} else {
			this.hideShowMessage('Du måste skriva in minst 5 bokstäver!');
		}
	};

	saveToState = e => {
		this.setState({ [e.target.name]: e.target.value });
	};

	nextStep = e => {
		e.preventDefault();
		this.props.saveDescription(this.state.arr);
	};

	prevStep = e => {
		e.preventDefault();
		this.props.previousStep();
	};

	render() {
		return (
			<RecipeForm>
				{this.state.message && <InfoMessage>{this.state.message}</InfoMessage>}
				<h3>{this.props.steg}. Gör såhär:</h3>
				<label htmlFor="string">Fyll i Steg {this.state.step}</label>
				<input
					type="text"
					name="string"
					value={this.state.string}
					onChange={this.saveToState}
					placeholder="Sätt på ugnen..."
				/>
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
				<List>
					{this.state.arr.map(item => (
						<li key={item}>
							<ListItemDiv>
								<p>{item}</p>
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
				<div style={{ display: "flex" }}>
					<Button onClick={this.prevStep}>
						{/* Behöver en hover-effekt för att indikera att man går vidare till nästa steg */}
						<i className="icofont-ui-previous" /> Föregående
					</Button>
					{this.state.arr.length <= 1 && (
						<DisabledButton>
							{/* Behöver en hover-effekt för att indikera att man går vidare till nästa steg */}
							<i className="icofont-ui-next" /> Nästa steg
						</DisabledButton>
					)}
					{this.state.arr.length >= 2 && (
						<Button primary onClick={this.nextStep}>
							{/* Behöver en hover-effekt för att indikera att man går vidare till nästa steg */}
							<i className="icofont-ui-next" /> Nästa steg
						</Button>
					)}
				</div>
			</RecipeForm>
		);
	}
}

export default Steg2;

Steg2.propTypes = {
	toNextStep: PropTypes.func,
	steg: PropTypes.number,
	previousStep: PropTypes.func,
	description: PropTypes.array
};
