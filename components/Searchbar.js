import React, { Component } from "react";
import Router from "next/router";
import axios from "axios";
import debounce from "lodash.debounce";
import Downshift, { resetIdCounter } from "downshift";
import PropTypes from "prop-types";
import SearchIcon from "../svg/search-1.svg";
import {
	SearchForm,
	SuggestionsDropdown,
	DropdownItem
} from "./styles/Searchbar";
import { Loading } from "./Loading";

function routeToItem(item) {
	Router.push({
		pathname: "/recept",
		query: {
			id: item.id
		}
	});
}

class Searchbar extends Component {
	static propTypes = {
		suggestions: PropTypes.instanceOf(Array)
	};

	constructor(props) {
		super();
		this.state = {
			query: "",
			loading: false,
			results: []
		};
	}

	/* 
		Då jag inte vill skicka en query till backend varje gång användaren trycker på en tangent så använder jag
		lodash debounce funktion för att endast skicka en request var 350 ms. 
		För att göra det måste jag använda en inline funktion på inputen, och sätta persist(); på eventet för att behålla scopet
		på eventet.
		Ref: https://github.com/jashkenas/underscore/issues/1905#issuecomment-60306121

		TO-DO: Gör så att Backend även söker på tags & description?

	*/

	saveToState = debounce(async e => {
		await this.setState({ [e.target.name]: e.target.value, loading: true });
		await this.submitSearch();
	}, 350);

	submitSearch = () => {
		const { query } = this.state;
		axios
			.get(`${process.env.API}/recipe/search/${query}`)
			.then(response => {
				console.log(response.data);
				this.setState({ results: response.data, loading: false });
			})
			.catch(error => {
				console.log(error);
			});
	};

	render() {
		resetIdCounter();
		return (
			<SearchForm>
				<Downshift
					onChange={routeToItem}
					itemToString={item => (item === null ? "" : item.title)}
				>
					{({
						getInputProps,
						getItemProps,
						isOpen,
						inputValue,
						highlightedIndex
					}) => (
						<div>
							<input
								{...getInputProps({
									onChange: e => {
										e.persist();
										this.saveToState(e);
									},
									type: "search",
									placeholder: "Sök recept...",
									name: "query"
								})}
							/>
							{isOpen && (
								<SuggestionsDropdown>
									{this.state.results.map((item, index) => (
										<DropdownItem
											{...getItemProps({ item })}
											key={item.id}
											highlighted={index === highlightedIndex}
										>
											<img src={item.photo} alt={item.title} />
											<p>{item.title}</p>
										</DropdownItem>
									))}
									{!this.state.results.length && !this.state.loading && (
										<DropdownItem>
											{`Hittade inte ${inputValue} i receptboken.`}
										</DropdownItem>
									)}
								</SuggestionsDropdown>
							)}
						</div>
					)}
				</Downshift>
			</SearchForm>
		);
	}
}

export default Searchbar;
