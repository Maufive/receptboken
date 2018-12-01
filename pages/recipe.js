import React, { Component } from "react";
import NewRecipeForm from "../components/NewRecipeForm";

class recipe extends Component {
	render() {
		const { user } = this.props;
		return <div>{user && <NewRecipeForm user={user} />}</div>;
	}
}

export default recipe;
