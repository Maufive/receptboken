import React, { Component } from "react";
import axios from "axios";
import Router from "next/router";
import {
	Wrapper,
	DetailsBar,
	ImageAndTags,
	Tag,
	ListItem,
	IconContainer
} from "./styles/ReceptStyles";

class SingleRecept extends Component {
	state = {
		recept: null,
		loading: false,
		error: null
	};

	componentDidMount() {
		this.getData();
	}

	getData = async () => {
		await this.setState({ loading: true });
		axios
			.get(`http://localhost:7777/recipe/${this.props.id}`)
			.then(response => {
				this.setState({ recept: response.data });
			})
			.catch(error => {
				console.log(error);
				Router.push("/");
			});
	};

	deleteRecipe = e => {
		e.preventDefault();
		axios
			.post(`http://localhost:7777/recipe/delete/${this.props.id}`)
			.then(response => {
				Router.push("/");
				console.log(response);
			})
			.catch(error => {
				console.log(error);
			});
	};

	render() {
		const { recept } = this.state;
		if (!recept) return <p>loading...</p>;
		return (
			<Wrapper>
				{console.log(recept[0])}
				<h1>{recept[0].title}</h1>
				<DetailsBar>
					<IconContainer>
						<i className="icofont-star" />
						<i className="icofont-star" />
						<i className="icofont-star" />
						<i className="icofont-star" />
						(4 röster)
					</IconContainer>
					<IconContainer>
						<i className="icofont-clock-time" />
						{recept[0].timeRequired.toString()}
					</IconContainer>
					<IconContainer>
						<i className="icofont-fork-and-knife" />
						{recept[0].servings}
					</IconContainer>
					<IconContainer>
						<i className="icofont-heart" style={{ color: "#bc1616" }} />
					</IconContainer>
				</DetailsBar>
				<ImageAndTags>
					<img src={recept[0].photo} alt="Foto på maten" height="300" />
					<div>
						{recept[0].tags.map(tag => (
							<Tag key={tag}>{tag}</Tag>
						))}
					</div>
				</ImageAndTags>
				<ImageAndTags>
					<div style={{ flex: "1" }}>
						<h2>Du Behöver:</h2>
						{recept[0].ingredients.map(ingredient => (
							<ListItem key={ingredient.input}>
								{ingredient.numberOfUnits} {ingredient.units} {ingredient.input}
							</ListItem>
						))}
					</div>
					<div style={{ flex: "2" }}>
						<h2>Gör såhär:</h2>
						{recept[0].description.map(step => (
							<ListItem key={step}>{step}</ListItem>
						))}
					</div>
				</ImageAndTags>
				<button onClick={this.deleteRecipe}>DELETE</button>
			</Wrapper>
		);
	}
}

export default SingleRecept;
