import React, { Component } from "react";
import PropTypes from "prop-types";
import { StyledForm } from "./styles/FormStyles";
import EditIcon from "../svg/edit.svg";
import AddIcon from "../svg/add.svg";
import IngredientIcon from "../svg/groceries.svg";
import TrashIcon from "../svg/trash.svg";
import { List, ListItemDiv } from "./styles/Steg1Styles";
import { Button, DisabledButton } from "./styles/Button";

class Steg2 extends Component {
	state = {
		arr: [],
		string: "",
		step: 1,
		editing: false,
		editIndex: null
	};

	componentDidMount() {
		this.setState({
			arr: this.props.description
		});
	}

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
			this.props.setMessage("info", "Du måste skriva minst 5 bokstäver");
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
		this.props.setMessage("success", "Du kan nu ändra!");
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
			this.props.setMessage("info", "Du måste skriva in minst 5 bokstäver!");
		}
	};

	saveToState = e => {
		this.setState({ [e.target.name]: e.target.value });
	};

	nextStep = e => {
		e.preventDefault();
		this.props.saveDescription(this.state.arr);
	};

	// prevStep = e => {
	// 	e.preventDefault();
	// 	this.props.previousStep();
	// };

	render() {
		const { steg, previousStep } = this.props;
		return (
			<StyledForm>
				<h3 style={{ display: "flex", justifyContent: "space-between" }}>
					<span>Ingedienser</span>
					<span>Steg {steg} av 3</span>
				</h3>
				<div>
					<textarea
						name="string"
						required
						value={this.state.string}
						onChange={this.saveToState}
					/>
					<label htmlFor="string">Fyll i Steg {this.state.step}</label>
				</div>
				<div>
					{this.state.editing ? (
						<Button onClick={e => this.saveEdit(e, this.state.editIndex)}>
							<EditIcon />
							Ändra
						</Button>
					) : (
						<Button fullWidth onClick={this.addToArray}>
							<AddIcon />
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
									<TrashIcon onClick={() => this.deleteItem(item)} />
									<EditIcon onClick={() => this.editItem(item)} />
								</div>
							</ListItemDiv>
						</li>
					))}
				</List>
				<div style={{ display: "flex" }}>
					<Button fullWidth onClick={previousStep}>
						← Föregående
					</Button>
					{this.state.arr.length <= 1 && (
						<DisabledButton fullWidth>Nästa steg →</DisabledButton>
					)}
					{this.state.arr.length >= 2 && (
						<Button primary fullWidth onClick={this.nextStep}>
							Nästa steg →
						</Button>
					)}
				</div>
			</StyledForm>
		);
	}
}

export default Steg2;

Steg2.propTypes = {
	toNextStep: PropTypes.func,
	previousStep: PropTypes.func,
	steg: PropTypes.number,
	description: PropTypes.array,
	saveDescription: PropTypes.func
};
