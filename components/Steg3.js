import React, { Component } from "react";
import PropTypes from "prop-types";
import { Loading } from "./Loading";
import { RecipeForm, DetailsContainer } from "./styles/Steg1Styles";
import { Button, DisabledButton } from "./styles/Button";
import SuccessIcon from "../svg/success.svg";

const TAGS = [
	"Texmex",
	"Vardagsmiddag",
	"Snabbt & Enkelt",
	"Italienskt",
	"Asiatiskt",
	"Smalt & Nyttigt",
	"Billigt",
	"Bakat & Dessert"
];

class Steg3 extends Component {
	state = {
		arr: [],
		photo: "",
		largePhoto: "",
		timeRequired: 0,
		tags: [],
		message: null,
		loading: false
	};

	saveToState = e => {
		this.setState({ [e.target.name]: e.target.value });
	};

	handleTag = e => {
		const checkbox = e.target;
		// take a copy of the current permissions
		let updatedTags = [...this.state.tags];
		// figure out if we need to remove or add this permission
		if (checkbox.checked) {
			// add it in!
			updatedTags.push(checkbox.value);
		} else {
			updatedTags = updatedTags.filter(tags => tags !== checkbox.value);
		}
		this.setState({ tags: updatedTags });
	};

	uploadFile = async e => {
		this.setState({ loading: true });
		const files = e.target.files;
		const data = new FormData();
		data.append("file", files[0]);
		data.append("upload_preset", "receptboken");

		const res = await fetch(
			"https://api.cloudinary.com/v1_1/dcgb0fhog/image/upload",
			{
				method: "POST",
				body: data
			}
		).catch(error => this.props.setMessage("danger", error));
		const file = await res.json();
		this.setState({
			photo: file.secure_url,
			largePhoto: file.eager[0].secure_url,
			loading: false
		});
	};

	saveState = async e => {
		e.preventDefault();
		await this.props.saveDetails(
			this.state.photo,
			this.state.timeRequired,
			this.state.tags
		);
		this.props.submitRecipe();
	};

	render() {
		const { photo, timeRequired } = this.state;
		return (
			<RecipeForm>
				<h3>{this.props.steg}. Fyll i lite detaljer om ditt recept</h3>

				<DetailsContainer>
					<div>
						<label htmlFor="timeRequired">
							Ungefär hur lång tid tar receptet?{" "}
						</label>
						<div>
							<input
								type="range"
								name="timeRequired"
								min={0}
								max={180}
								value={timeRequired}
								onChange={this.saveToState}
							/>
							<p>{timeRequired} minuter</p>
						</div>
					</div>
					<div>
						<label htmlFor="photo">Ladda upp en bild:</label> <br />
						<input
							type="file"
							id="file"
							name="photo"
							placeholder="Ladda upp en bild"
							onChange={this.uploadFile}
						/>
						<br />
						{this.state.loading && <Loading />}
						{photo && (
							<img width="300" src={photo} alt="Bild förhandsvisning" />
						)}
					</div>
					<div>
						<label htmlFor="tags">Kryssa i passande kategorier: </label> <br />
						{TAGS.map(tag => (
							<label htmlFor={`recipe-tag-${tag}`} key={tag}>
								<input
									type="checkbox"
									id={`recipe-tag-${tag}`}
									checked={this.state.tags.includes(tag)}
									value={tag}
									onChange={this.handleTag}
								/>{" "}
								{tag} <br />
							</label>
						))}
					</div>
				</DetailsContainer>

				<div style={{ display: "flex" }}>
					<Button fullWidth onClick={this.props.previousStep}>
						← Föregående
					</Button>
					{this.state.timeRequired <= 4 && (
						<DisabledButton fullWidth>
							<SuccessIcon /> Ladda upp!
						</DisabledButton>
					)}
					{this.state.timeRequired >= 5 && (
						<Button primary fullWidth onClick={this.saveState}>
							<SuccessIcon /> Ladda upp!
						</Button>
					)}
				</div>
			</RecipeForm>
		);
	}
}

export default Steg3;

Steg3.propTypes = {
	steg: PropTypes.number,
	previousStep: PropTypes.func,
	saveDetails: PropTypes.func,
	setMessage: PropTypes.func
};
