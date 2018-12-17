import React, { Component } from "react";
import Modal from "react-modal";
import axios from "axios";
import NotesIcon from "../svg/notes.svg";
import AddIcon from "../svg/add.svg";
import { Button } from "./styles/Button";
import { customStyles } from "./styles/Jumbotron";
import { LoginForm } from "./styles/ModalStyles";

Modal.setAppElement("#__next");

class AddToShoppinglist extends Component {
	state = {
		isModalOpen: false,
		title: "",
		shoppinglists: null
	};

	componentDidMount = () => {
		this.setState({ isModalOpen: this.props.open });
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
		axios
			.post(`http://localhost:7777/lists/add/${this.props.receptid}`, { title })
			.then(response => {
				this.getShoppinglists();
			})
			.catch(error => console.log(error));
	};

	getShoppinglists = async () => {
		axios
			.get(`http://localhost:7777/lists/user/${this.props.userid}`)
			.then(response => this.setState({ shoppinglists: response.data }))
			.catch(error => console.log(error));
	};

	render() {
		const { shoppinglists } = this.state;
		return (
			<div>
				<Button onClick={this.openModal}>
					<NotesIcon /> Lägg till i inköpslista
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
								value={this.state.title}
								name="title"
								onChange={this.saveToState}
								required
							/>
							<label htmlFor="title">
								<AddIcon />
								Ny inköpslista
							</label>
						</div>
						<Button fullWidth type="submit">
							Skapa ny inköpslista
						</Button>
					</LoginForm>
					{shoppinglists &&
						shoppinglists.length >= 1 &&
						shoppinglists.map(list => <p>{list.title}</p>)}
				</Modal>
			</div>
		);
	}
}

export default AddToShoppinglist;
