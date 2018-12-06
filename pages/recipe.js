import React, { Component } from "react";
import Router from "next/router";
import NewRecipeForm from "../components/NewRecipeForm";

class recipe extends Component {
	componentDidMount() {
		if (!this.props.user) {
			Router.push("/login");
			this.props.setMessage(
				"info",
				"Vänligen logga in för att lägga till recept"
			);
		}
	}

	render() {
		const { user, setMessage } = this.props;
		return (
			<div>{user && <NewRecipeForm user={user} setMessage={setMessage} />}</div>
		);
	}
}

export default recipe;
