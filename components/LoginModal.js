import React, { Component } from "react";
import Modal from "react-modal";
import { MessageConsumer } from "./providers/MessageProvider";
import Login from "./Login";
import { MinButton } from "./styles/Button";
import { LoginContainer, customStyles } from "./styles/Jumbotron";
import LockIcon from "../svg/las.svg";

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
				<MinButton onClick={this.openModal}>
					<LockIcon />
					Logga in
				</MinButton>
				<Modal
					isOpen={this.state.isModalOpen}
					onAfterOpen={this.afterOpenModal}
					onRequestClose={this.closeModal}
					style={customStyles}
					contentLabel="Login Modal"
				>
					<MessageConsumer>
						{({ setMessage }) => (
							<Login
								setUser={this.props.setUser}
								setMessage={setMessage}
								closeModal={this.closeModal}
							/>
						)}
					</MessageConsumer>
				</Modal>
			</LoginContainer>
		);
	}
}

export default LoginModal;
