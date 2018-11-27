import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button } from "./styles/Button";
import { RecipeForm, ListItemDiv, List } from "./styles/Steg1Styles";

class Steg1Test extends Component {
	state = {
    arr: [], // en array med ingredienser
    // ska prova göra om item till ett object istället, och spara en array av objects
    // för att lättare kunna redigera varje item. Att concat'a en sträng av 3 olika delar
    // känns ändå som en dålig idé i det långa loppet - ett object är bättre på alla sätt o vis.
    // KOM IHÅG !!! --- Databasen förväntar sig just nu en [String], måste ändra Modelen till [Object]
		item: {
      input: "",
      numberOfUnits: 1,
      units: "st",
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
    // Ta en kopia av objektet Item i state
    const item = { ...this.state.item };
    // Stoppa knappen från att skicka en request
    e.preventDefault();
    // 
		if (item.input.length >= 2) {
      // ta en kopia av arrayen i state, och lägg till item objektet i den nya arrayen innan den sparas
			await this.setState(prevState => ({ arr: [...prevState.arr, item] }));
      // efter state blivit sparat, töm inputfältet
      
      // verkar inte funka - inputfältet töms inte.
      const emptyInputField = { ...this.state.item };
      emptyInputField.input = "";
      emptyInputField.numberOfUnits = 1;
      await this.setState({ emptyInputField })
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
    // ta en kopia av objektet som ska ändras
    // const item = { ...this.state.item };
		// kolla så det finns något i inputen
		if (item.input.length >= 2) {
      // ta en kopia på arrayen i state för att modifiera
      
      // denna kopia blir skum, får en extra property som är undefined. Vanliga arr i state är OK
      const arr = [...this.state.arr];
      // spara över objektet i arrayen med objektet i state. Behöver index.
      console.log(index);
      arr[index] = item;
      // item.input = "";
      // item.numberOfUnits = 1;
			// spara.
			this.setState({
				arr,
				item,
				editing: false
			});
		} else {
			console.log("Too short!");
		}
	};
  
  saveIngredient = e => {
    const item = { ...this.state.item };
    item.input = e.target.value;
    this.setState({ item })
  }

	handleUnits = e => {
    let item = { ...this.state.item };
    item.units = e.target.value;
    this.setState({ item })
  };
  
  saveNumberOfUnits = e => {
    const item = { ...this.state.item };
    item.numberOfUnits = e.target.value;
    console.log(item);
    this.setState({ item });
  }

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
				</div>
				<List>
					{this.state.arr.map(item => (
						<li key={item.input}>
							<ListItemDiv>
								<p>👉 {item.input}</p>
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

export default Steg1Test;

Steg1Test.propTypes = {
	saveToState: PropTypes.func,
	toNextStep: PropTypes.func,
	ingredients: PropTypes.array,
	servings: PropTypes.number
};