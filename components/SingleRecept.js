import React, { Component } from "react";
import Router from "next/router";
import Head from "next/head";
import axios from "axios";
import Moment from "react-moment";
import { MessageConsumer } from "./providers/MessageProvider";
import Stars from "./Stars";
import { Loading } from "./Loading";
import Author from "./Author";
import Heart from "./Heart";
import ClockIcon from "../svg/clock.svg";
import TrashIcon from "../svg/trash.svg";
import TagIcon from "../svg/price-tag.svg";
import CalenderIcon from "../svg/calendar.svg";
import DishIcon from "../svg/dishes.svg";
import {
	Wrapper,
	DetailsBar,
	ImageAndTags,
	Tag,
	Ingredienser,
	Beskrivning,
	Container,
	IconContainer,
	DeleteContainer,
	ImgContainer,
	Dot
} from "./styles/ReceptStyles";
import AddToShoppinglist from "./AddToShoppinglist";

class SingleRecept extends Component {
	state = {
		recept: null,
		loading: false,
		error: null,
		owner: false
	};

	async componentDidMount() {
		await this.getData();
		if (this.props.user) {
			this.verifyUser();
		}
	}

	getData = async () => {
		await this.setState({ loading: true });
		await axios
			.get(`https://receptboken.herokuapp.com/recipe/one/${this.props.id}`)
			.then(response => {
				this.setState({ recept: response.data, loading: false });
			})
			.catch(error => {
				console.log(error);
				Router.push("/");
			});
	};

	// Om användaren blivit verifierad och idt stämmer överens med idt som skapat receptet, sätt owner till boolean från api't.
	// och visa en knapp för att ta bort receptet.
	verifyUser = () => {
		axios
			.post(
				`https://receptboken.herokuapp.com/auth/verify/author/${
					this.state.recept.author
				}`
			)
			.then(response => {
				this.setState({ owner: response.data });
			})
			.catch(error => console.log(error));
	};

	deleteRecipe = async e => {
		e.preventDefault();
		await this.setState({ loading: true });
		await axios
			.post(
				`https://receptboken.herokuapp.com/recipe/delete/${this.props.id}`,
				{
					user: this.props.user
				}
			)
			.then(response => {
				this.setState({ loading: false });
				Router.push("/");
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
				<Head>
					<title>Receptboken | {recept.title}</title>
				</Head>

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
					<ImgContainer>
						<img src={recept.photo} alt="Foto på maten" />
					</ImgContainer>
					<div>
						<div>
							{recept.tags.map(tag => (
								<Tag key={tag}>
									<TagIcon />
									<p>{tag}</p>
								</Tag>
							))}
						</div>

						{this.props.user && (
							<div>
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
							</div>
						)}

						<Author id={recept.author} />
						<IconContainer>
							<CalenderIcon />
							<Moment format="YYYY/MM/DD">{recept.created}</Moment>
						</IconContainer>

						{this.state.owner && (
							<DeleteContainer onClick={this.deleteRecipe}>
								<TrashIcon />
								Ta bort recept
							</DeleteContainer>
						)}
					</div>
				</ImageAndTags>

				<Container>
					<h2>Du Behöver:</h2>
					<Ingredienser>
						{recept.ingredients.map(ingredient => (
							<div key={ingredient.input}>
								<Dot />
								<p>
									{ingredient.numberOfUnits} {ingredient.units}{" "}
									{ingredient.input}
								</p>
							</div>
						))}
					</Ingredienser>

					<h2>Gör så här:</h2>
					<Beskrivning>
						{recept.description.map(step => (
							<div key={step}>
								<Dot />
								<p>{step}</p>
							</div>
						))}
					</Beskrivning>
				</Container>
			</Wrapper>
		);
	}
}

export default SingleRecept;
