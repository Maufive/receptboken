import React, { Component } from "react";
import axios from "axios";
import { Wrapper } from "./styles/Searchbar";

class Searchbar extends Component {
	constructor(props) {
		super();
		this.state = {
			searchterm: ""
		};
	}

	saveToState = e => {
		this.setState({ [e.target.name]: e.target.value });
	};

	onSubmit = e => {
		e.preventDefault();

		const { searchterm } = this.state;

		// axios
		// 	.post("http://localhost:7777/recipe/search", { searchterm })
		// 	.catch(error => console.log(error));
	};

	render() {
		return (
			<Wrapper onSubmit={this.onSubmit}>
				<input
					type="text"
					name="searchterm"
					value={this.state.searchterm}
					onChange={this.saveToState}
					placeholder="Sök recept..."
					required
				/>
				<button type="submit">
					<i className="icofont-search-1" />
					Sök
				</button>
			</Wrapper>
		);
	}
}

export default Searchbar;
