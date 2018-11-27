import React, { Component } from "react";
import PropTypes from "prop-types";
import { RecipeForm, List, ListItemDiv } from "./styles/Steg1Styles";
import { Button } from "./styles/Button";

class Steg2 extends Component {
	state = {
		arr: [],
		string: "",
		step: 1
  };
  
  componentDidMount() {
    this.setState({
      arr: this.props.description
    })
  }

	addToArray = e => {
		const { string, step } = this.state;
		e.preventDefault();

		if (string.length >= 1) {
			const steg = `Steg ${step}: `;
			const completeString = steg.concat(" ", string);

			this.setState(prevState => ({
				arr: [...prevState.arr, completeString],
				step: step + 1,
				string: ""
			}));
		} else {
			console.log("Something happund");
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
  }

	render() {
		return (
			<RecipeForm>
				<h3>{this.props.steg}. Gör såhär:</h3>
				<label htmlFor="string">Fyll i Steg {this.state.step}</label>
				<br />
				<input
					type="text"
					name="string"
					value={this.state.string}
					onChange={this.saveToState}
					placeholder="Sätt på ugnen..."
				/>
				<div>
					<Button onClick={this.addToArray}>
						<i style={{ marginRight: "1rem" }} className="icofont-plus" />
						Lägg till
					</Button>
				</div>
				<List>
					{this.state.arr.map(item => (
						<li key={item}>
							<ListItemDiv>
								<p>{item}</p>
								<i
									onClick={() => this.deleteItem(item)}
									className="icofont-trash"
								/>
							</ListItemDiv>
							{/* <p onClick={() => this.editItem(item)}><i className="icofont-edit" /></p> */}
						</li>
					))}
				</List>
				<div style={{ display: 'flex' }}>
					<Button onClick={this.prevStep}>
						{/* Behöver en hover-effekt för att indikera att man går vidare till nästa steg */}
						<i className="icofont-ui-previous" /> Föregående
					</Button>
					{this.state.arr.length <= 1 && (
						<Button>
							{" "}
							{/* Behöver en hover-effekt för att indikera att man går vidare till nästa steg */}
							<i className="icofont-ui-next" /> Nästa steg
						</Button>
					)}
					{this.state.arr.length >= 2 && (
						<Button primary onClick={this.nextStep}>
							{" "}
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
  description: PropTypes.array,
};
