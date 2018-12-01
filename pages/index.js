import React, { Component } from "react";
import Link from "next/link";
import axios from "axios";
import Jumbotron from "../components/Jumbotron";
import Searchbar from "../components/Searchbar";
import Register from "../components/Register";
import { Loading } from "../components/Loading";
import { Card, CardMenu } from "../components/styles/Card";

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
		axios.get("http://localhost:7777/recipe").then(res => {
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
		if (!this.state.recept) return <Loading />;
		return (
			<div>
				<Jumbotron />
				<br />
				<Searchbar />
				<div
					style={{
						display: "flex",
						width: "1000px",
						flexWrap: "wrap",
						justifyContent: "space-evenly",
						margin: "0 auto",
						padding: "2rem"
					}}
				>
					{this.state.recept.map(recept => (
						<Link key={recept._id} href={`/recept?id=${recept._id}`}>
							<a>
								<Card>
									<img src={recept.photo} alt="Bild på recept" height="250px" />
									<h3>{recept.title}</h3>
									<div>
										<span>
											<i className="icofont-clock-time" /> {recept.timeRequired}
											m
										</span>
										<span>
											<i className="icofont-star" />
											<i className="icofont-star" />
											<i className="icofont-star" />
											<i className="icofont-star" />
										</span>
										<span>
											<i className="icofont-heart" />
										</span>
									</div>
								</Card>
							</a>
						</Link>
					))}
				</div>
			</div>
		);
	}
}

export default index;
