import React, { Component } from "react";
import Modal from "react-modal";
import { MessageConsumer } from "./providers/MessageProvider";
import Login from "./Login";
import { Button } from "./styles/Button";
import { LoginContainer, customStyles } from "./styles/Jumbotron";

Modal.setAppElement("#__next");

class LoginModal extends Component {
	state = {
		isModalOpen: false
	};

	componentDidMount = () => {
		this.setState({ isModalOpen: this.props.open });
	};

	openModal = () => {
		this.setState({ isModalOpen: true });
	};

	closeModal = () => {
		this.setState({ isModalOpen: false });
	};

	render() {
		return (
			<LoginContainer>
				{this.props.primaryButton ? (
					<Button fullWidth primary onClick={this.openModal}>
						Logga in
					</Button>
				) : (
					<Button fullWidth onClick={this.openModal}>
						Logga in
					</Button>
				)}
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
		);
	}
}

export default LoginModal;
