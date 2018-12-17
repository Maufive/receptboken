import React, { Component } from "react";
import axios from "axios";

class ShoppingList extends Component {
	state = {
		listor: null
	};

	componentDidMount() {
		// this.getShoppingLists();
	}

	getShoppingLists = () => {
		axios.defaults.headers.common["Authorization"] =
			"Bearer " + localStorage.getItem("jwtToken");
		axios
			.get(`http://localhost:7777/lists/user/${this.props.user._id}`)
			.then(response => console.log(response))
			.catch(error => console.log(error));
	};

	render() {
		return <div>I AM THE SHOPPPINGS YES</div>;
	}
}

export default ShoppingList;
