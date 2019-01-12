import React, { Component } from "react";
import axios from "axios";
import Link from "next/link";
import { Loading } from "./Loading";
import { List, ListContainer } from "./styles/ShoppinglistStyles";

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
			.get(
				`https://receptboken.herokuapp.com/lists/user/${this.props.user._id}`
			)
			.then(response => this.setState({ shoppinglists: response.data }))
			.catch(error => console.log(error));
	};

	render() {
		const { shoppinglists } = this.state;

		return (
			<ListContainer>
				<h1>Sparade inköpslistor:</h1>
				<List>
					{shoppinglists ? (
						shoppinglists.map(list => (
							<Link
								href={{
									pathname: "/inkopslista",
									query: {
										id: list._id
									}
								}}
							>
								<a>
									<li key={list._id}>{list.title}</li>
								</a>
							</Link>
						))
					) : (
						<li>
							<p>Du har inga inköpslistor...</p>
						</li>
					)}
				</List>
			</ListContainer>
		);
	}
}

export default ShoppingList;
