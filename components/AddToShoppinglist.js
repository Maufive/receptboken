import React, { Component } from "react";
import Modal from "react-modal";
import Link from "next/link";
import axios from "axios";
import ListBoldIcon from "../svg/listBold.svg";
import AddIcon from "../svg/add.svg";
import { Button } from "./styles/Button";
import { customStyles } from "./styles/Jumbotron";
import { LoginForm } from "./styles/ModalStyles";
import { List } from "./styles/ShoppinglistStyles";

// Modal.setAppElement("#__next");

class AddToShoppinglist extends Component {
	state = {
		isModalOpen: false,
		title: "",
		shoppinglists: null
	};

	componentDidMount = () => {
		this.setState({ isModalOpen: this.props.open });
		if (typeof window !== "undefined") {
			ReactModal.setAppElement("body");
		}
	};

	openModal = () => {
		this.setState({ isModalOpen: true });
		this.getShoppinglists();
	};

	closeModal = () => {
		this.setState({ isModalOpen: false });
	};

	saveToState = e => {
		this.setState({ [e.target.name]: e.target.value });
	};

	onSubmit = async e => {
		e.preventDefault();
		const { title } = this.state;
		await axios
			.post(
				`https://receptboken.herokuapp.com/lists/add/${this.props.receptid}`,
				{ title }
			)
			.then(response => {
				this.getShoppinglists();
				this.setState({ title: "", isModalOpen: false });
				this.props.setMessage("success", response.data.message);
			})
			.catch(error => console.log(error));
	};

	getShoppinglists = async () => {
		await axios
			.get(`https://receptboken.herokuapp.com/lists/user/${this.props.userid}`)
			.then(response => this.setState({ shoppinglists: response.data }))
			.catch(error => console.log(error));
	};

	updateShoppinglist = async shoppinglist => {
		// Plocka ut ID och arrayen med ingredienserna från props
		const id = shoppinglist._id;
		const newItems = this.props.ingredients;
		const oldItems = shoppinglist.list;
		// Skicka ingredienserna
		await axios
			.post(`https://receptboken.herokuapp.com/lists/update/${id}`, {
				newItems,
				oldItems
			})
			.then(response => {
				this.props.setMessage("success", response.data.message);
				console.log(response.data);
			})
			.catch(error => console.log(error));
		this.setState({ isModalOpen: false, title: "" });
	};

	render() {
		const { shoppinglists } = this.state;
		return (
			<div>
				<Button primary onClick={this.openModal}>
					<ListBoldIcon /> Lägg till i inköpslista
				</Button>
				<Modal
					isOpen={this.state.isModalOpen}
					onAfterOpen={this.afterOpenModal}
					onRequestClose={this.closeModal}
					style={customStyles}
					contentLabel="Login Modal"
				>
					<LoginForm onSubmit={this.onSubmit}>
						<h2>Välj inköpslista</h2>
						<div>
							<input
								type="text"
								name="title"
								id="title"
								value={this.state.title}
								onChange={this.saveToState}
								required
							/>
							<label htmlFor="title" for="title">
								<AddIcon />
								Ny inköpslista
							</label>
						</div>
						<Button primary fullWidth type="submit">
							Skapa ny inköpslista
						</Button>
						<List>
							{shoppinglists &&
								shoppinglists.length >= 1 &&
								shoppinglists.map(list => (
									<div key={list._id}>
										<Link href={`/inkopslistor/${list._id}`}>
											<a>
												<li>{list.title}</li>
											</a>
										</Link>
										<AddIcon onClick={() => this.updateShoppinglist(list)} />
									</div>
								))}
						</List>
					</LoginForm>
				</Modal>
			</div>
		);
	}
}

export default AddToShoppinglist;
