import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";

const Wrapper = styled.form`
  width: 500px;
  margin: 0 auto;
	height: 45px;
  border-radius: 30px;
  border: 1px solid ${props => props.theme.lightgrey};
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 2px 0.5rem 2px 2rem;

	input[type="text"] {
		width: 400px;
		height: 100%;
		border-radius: 30px;
		border: none;
		padding: 0;
    outline: none;
    font-size: 1.5rem;
    padding: 1.5rem;
	}
	button {
		background: ${props => props.theme.green};
		border: none;
    height: 38px;
		color: ${props => props.theme.white};
    border-radius: 30px;
    font-size: 1.5rem;
    padding: 0 1.2rem;
	}
`;

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
					Sök
				</button>
			</Wrapper>
		);
	}
}

export default Searchbar;
