import React from "react";
import { SuggestionsDropdown, DropdownItem } from "./styles/Searchbar";

const Suggestions = props => {
	const options = props.results.map(result => (
		<DropdownItem key={result.id}>
			<img src={result.photo} alt={result.title} />
			<p>{result.title}</p>
		</DropdownItem>
	));
	return (
		<SuggestionsDropdown>
			<ul>{options}</ul>
		</SuggestionsDropdown>
	);
};

export default Suggestions;
