import React, { Component } from "react";
import axios from "axios";
import { Loading } from "./Loading";

class ShoppingList extends Component {
	state = {
		shoppinglists: null
	};

	componentDidMount() {
		if (this.props.user) {
			this.getShoppingLists();
		}
	}

	getShoppingLists = () => {
		axios.defaults.headers.common["Authorization"] =
			"Bearer " + localStorage.getItem("jwtToken");
		axios
			.get(`http://localhost:7777/lists/user/${this.props.user._id}`)
			.then(response => this.setState({ shoppinglists: response.data }))
			.catch(error => console.log(error));
	};

	render() {
		const { shoppinglists } = this.state;
		if (!shoppinglists || shoppinglists.length < 1) return <Loading />;
		return (
			<ul>
				{shoppinglists.map(list => (
					<li key={list._id}>
						<p>{list.title}</p>
					</li>
				))}
			</ul>
		);
	}
}

export default ShoppingList;
