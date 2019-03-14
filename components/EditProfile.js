import React, { Component } from "react";
import axios from "axios";
import Router from "next/router";
import { Loading } from "../components/Loading";
import { StyledForm } from "../components/styles/FormStyles";
import { Button } from "../components/styles/Button";

// Verifiera att användaren som är inloggad är den användare som försöker redigera profilen.
class EditProfile extends Component {
	state = {
		verified: false,
		loading: false,
		photo: this.props.user.photo || null,
		fname: this.props.user.fname,
		lname: this.props.user.lname,
		description: this.props.user.description || ""
	};

	async componentDidMount() {
		await this.verifyUser();
	}

	saveToState = e => {
		this.setState({ [e.target.name]: e.target.value });
	};

	verifyUser = () => {
		// Skickar en postrequest till servern som tar id´t i queryn och id´t som finns på jwt-token och jämför dem på servern
		const user = this.props.user;
		axios
			.post(
				`https://receptboken.herokuapp.com/auth/verify/${this.props.query.id}`,
				{
					user
				}
			)
			.then(response => {
				if (response.data === true) {
					this.setState({ verified: true });
				} else {
					this.props.setMessage(
						"danger",
						"Du har inte tillåtelse att göra detta"
					);
					Router.push("/");
				}
			})
			.catch(error => console.log(error));
	};

	uploadFile = async e => {
		this.setState({ loading: true });
		const files = e.target.files;
		const data = new FormData();
		data.append("file", files[0]);
		data.append("upload_preset", "receptboken_profil");

		const res = await fetch(
			"https://api.cloudinary.com/v1_1/dcgb0fhog/image/upload",
			{
				method: "POST",
				body: data
			}
		).catch(error => console.log(error));
		const file = await res.json();
		this.setState({
			photo: file.secure_url,
			loading: false
		});
	};

	onSubmit = async e => {
		e.preventDefault();
		const data = this.state;
		const id = this.props.user._id;
		await axios
			.post(`${process.env.API}/user/edit/${id}`, { data })
			.then(response => {
				this.props.setMessage("success", response.data);
				Router.push(`/profile?id=${id}`);
				location.reload();
			})
			.catch(error => console.log(error));
	};

	render() {
		return (
			<div>
				<StyledForm onSubmit={this.onSubmit} id="edit-profile-form">
					<h1>Redigera din profil</h1>
					<div>
						<input
							type="text"
							name="fname"
							id="fname"
							onChange={this.saveToState}
							value={this.state.fname}
						/>
						<label htmlFor="fname">Förnamn</label>
					</div>
					<div>
						<input
							type="text"
							name="lname"
							id="lname"
							onChange={this.saveToState}
							value={this.state.lname}
						/>
						<label htmlFor="lname">Efternamn</label>
					</div>
					<div>
						<textarea
							name="description"
							id="description"
							onChange={this.saveToState}
							value={this.state.description}
						/>
						<label
							htmlFor="description"
							style={{
								transform: "translateY(-4.5rem)"
							}}
						>
							Beskrivning
						</label>
					</div>
					<div style={{ flexDirection: "column" }}>
						<p>Ladda upp en profilbild</p>
						<input
							type="file"
							id="file"
							name="photo"
							onChange={this.uploadFile}
							style={{
								margin: "2rem 0"
							}}
						/>
						{this.state.loading && <Loading />}
						{this.state.photo && (
							<img
								width="150"
								id="photo"
								src={this.state.photo}
								alt="Bild förhandsvisning"
								style={{
									borderRadius: "50%"
								}}
							/>
						)}
					</div>
					<Button type="submit" id="submit-button" fullWidth primary>
						Spara ändringar
					</Button>
				</StyledForm>
			</div>
		);
	}
}

export default EditProfile;
