import React, { Component } from "react";
import Router from "next/router";
import axios from "axios";
import { SmallLoading } from "../components/Loading";
import { StarsForm } from "./styles/RatingStars";

/* 
  Denna komponent blev väldigt rörig eftersom jag inte loopar över arrayen i state. Det var tanken från början
  men jag fick inte till det med hover effekten på stjärnorna, eftersom input och label är då wrappet i den 
  div då jag inte får ha 2 children som returnvalue från en mapmethod. 
*/

class Stars extends Component {
	state = {
		num: [5, 4, 3, 2, 1],
		rating: null,
		loading: false,
		message: null,
		saved: false
	};

	handleChange = e => {
		const rating = parseInt(e.target.value);
		this.setState({ rating });
	};

	handleSubmit = async e => {
		// Finns utrymme här att kolla om användaren betygsatt innan så kan den inte göra det igen
		e.preventDefault();
		const { rating } = this.state;
		this.setState({ loading: true });

		if (!rating) {
			this.setState({
				message: "Du måste ge ett betyg först!",
				loading: false
			});
		}

		await axios
			.post(`http://localhost:7777/recipe/review/${this.props.id}`, {
				rating
			})
			.then(response => {
				this.setState({
					loading: response.data.loading,
					message: response.data.message,
					saved: response.data.saved,
					rating: null
				});
				console.log("Betyg sparat!");
			})
			.catch(error => {
				console.log(error);
				this.setState({
					loading: false,
					saved: false
				});
				Router.push("/login");
			});
	};

	render() {
		return (
			<StarsForm method="POST" onSubmit={this.handleSubmit}>
				<div>
					<input
						type="radio"
						required
						id={`star${5}`}
						name="rating"
						value={5}
						onClick={this.handleChange}
					/>
					<label htmlFor={`star${5}`}>{5} Stars</label>
					<input
						type="radio"
						required
						id={`star${4}`}
						name="rating"
						value={4}
						onClick={this.handleChange}
					/>
					<label htmlFor={`star${4}`}>{4} Stars</label>
					<input
						type="radio"
						required
						id={`star${3}`}
						name="rating"
						value={3}
						onClick={this.handleChange}
					/>
					<label htmlFor={`star${3}`}>{3} Stars</label>
					<input
						type="radio"
						required
						id={`star${2}`}
						name="rating"
						value={2}
						onClick={this.handleChange}
					/>
					<label htmlFor={`star${2}`}>{2} Stars</label>
					<input
						type="radio"
						required
						id={`star${1}`}
						name="rating"
						value={1}
						onClick={this.handleChange}
					/>
					<label htmlFor={`star${1}`}>{1} Stars</label>
				</div>
				{this.state.saved ? (
					<button disabled type="submit">
						Betyg sparat! 🎉
					</button>
				) : (
					<button type="submit">
						{this.state.loading ? <SmallLoading /> : "Betygsätt →"}
					</button>
				)}
			</StarsForm>
		);
	}
}

export default Stars;
