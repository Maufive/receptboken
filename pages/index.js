import React, { Component } from "react";
import Link from "next/link";
import axios from "axios";
import Jumbotron from '../components/Jumbotron';
import Searchbar from '../components/Searchbar';
import Register from "../components/Register";

class index extends Component {
	state = {
		user: null,
		recept: null
	};

	componentDidMount() {
		if (localStorage.jwtToken) {
			this.callApi();
		} else {
			console.log("Sorry, no user sadface");
		}
		this.loadRecipes();
	}

	componentDidUpdate(prevState) {
		if (this.state.user !== null) {
			this.props.setUser(this.state.user);
		}
	}

	loadRecipes = async () => {
		axios.get("http://localhost:7777/recipe")
			.then(res => {
				this.setState({ recept: res.data });
			});
	};

	callApi = async () => {
		axios.defaults.headers.common["Authorization"] =
			"Bearer " + localStorage.getItem("jwtToken");
		axios.get("http://localhost:7777/user/profile").then(res => {
			this.setState({ user: res.data });
		});
	};

	render() {
		if(!this.state.recept) return <p>Loading...</p>
		return (
			<div>
				<Jumbotron />
				<br/>
				<Searchbar />
				{this.state.recept.map(recept => (
					<p key={recept._id}>{recept.title}</p>
				))}
				{/* <Link href="/login">
					<a>Logga in</a>
				</Link> */}
			</div>
		);
	}
}

export default index;
