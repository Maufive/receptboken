import React, { Component } from "react";
import Modal from "react-modal";
import Link from "next/link";
import { MessageConsumer } from "./providers/MessageProvider";
import Login from "./Login";
import {
	StyledJumbotron,
	LoginContainer,
	customStyles
} from "./styles/Jumbotron";
import { Button } from "./styles/Button";

Modal.setAppElement("#__next");

class Jumbotron extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isModalOpen: false
		};
	}

	openModal = () => {
		this.setState({ isModalOpen: true });
	};

	closeModal = () => {
		this.setState({ isModalOpen: false });
	};

	render() {
		return (
			<StyledJumbotron>
				<h1>Snabba enkla recept för att göra dig vardag smidigare</h1>
				{!this.props.user && (
					<LoginContainer>
						<Button fullWidth primary onClick={this.openModal}>
							Logga in
						</Button>
						<Modal
							isOpen={this.state.isModalOpen}
							onAfterOpen={this.afterOpenModal}
							onRequestClose={this.closeModal}
							style={customStyles}
							contentLabel="Login Modal"
						>
							<MessageConsumer>
								{({ setMessage }) => (
									<Login setUser={this.props.setUser} setMessage={setMessage} />
								)}
							</MessageConsumer>
						</Modal>
					</LoginContainer>
				)}

				<div style={{ width: "400px", margin: "0 auto" }}>
					<Link href="/recipe">
						<a>
							<Button primary>
								<i className="icofont-chef" /> Lägg till recept
							</Button>
						</a>
					</Link>
				</div>
			</StyledJumbotron>
		);
	}
}

export default Jumbotron;
