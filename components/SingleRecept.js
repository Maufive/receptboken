import React, { Component } from "react";
import axios from "axios";
import Router from "next/router";
import { MessageConsumer } from "./providers/MessageProvider";
import Stars from "./Stars";
import { Loading } from "./Loading";
import Author from "./Author";
import Heart from "./Heart";
import ClockIcon from "../svg/clock.svg";
import DishIcon from "../svg/dishes.svg";
import {
	Wrapper,
	DetailsBar,
	ImageAndTags,
	Tag,
	ListItem,
	IconContainer
} from "./styles/ReceptStyles";
import AddToShoppinglist from "./AddToShoppinglist";

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
		await axios
			.get(`http://localhost:7777/recipe/${this.props.id}`)
			.then(response => {
				this.setState({ recept: response.data, loading: false });
			})
			.catch(error => {
				console.log(error);
				Router.push("/");
			});
	};

	deleteRecipe = async e => {
		e.preventDefault();
		await this.setState({ loading: true });
		await axios
			.post(`http://localhost:7777/recipe/delete/${this.props.id}`)
			.then(response => {
				this.setState({ loading: false });
				Router.push("/");
				console.log(response);
			})
			.catch(error => {
				console.log(error);
			});
	};

	render() {
		const { recept } = this.state;
		if (!this.state.recept) return <Loading />;
		return (
			<Wrapper>
				<h1>{recept.title}</h1>
				<DetailsBar>
					<Stars id={this.props.id} />
					<MessageConsumer>
						{({ setMessage }) => (
							<Heart
								id={recept._id}
								setMessage={setMessage}
								user={this.props.user}
								setUser={this.props.setUser}
							/>
						)}
					</MessageConsumer>
					<IconContainer>
						<ClockIcon />
						{recept.timeRequired.toString()}
					</IconContainer>
					<IconContainer>
						<DishIcon />
						{recept.servings}
					</IconContainer>
				</DetailsBar>
				<ImageAndTags>
					<img src={recept.photo} alt="Foto på maten" height="300" />
					<div>
						<div>
							{recept.tags.map(tag => (
								<Tag key={tag}>{tag}</Tag>
							))}
						</div>
						{this.props.user && (
							<IconContainer>
								<MessageConsumer>
									{({ setMessage }) => (
										<AddToShoppinglist
											userid={this.props.user._id}
											receptid={recept._id}
											ingredients={recept.ingredients}
											setMessage={setMessage}
										/>
									)}
								</MessageConsumer>
							</IconContainer>
						)}
						<Author id={recept.author} />
					</div>
				</ImageAndTags>
				<ImageAndTags>
					<div style={{ flex: "1" }}>
						<h2>Du Behöver:</h2>
						{recept.ingredients.map(ingredient => (
							<ListItem key={ingredient.input}>
								{ingredient.numberOfUnits} {ingredient.units} {ingredient.input}
							</ListItem>
						))}
					</div>
					<div style={{ flex: "2" }}>
						<h2>Gör såhär:</h2>
						{recept.description.map(step => (
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
