import React, { Component } from "react";
import PropTypes from "prop-types";
import Modal from "react-modal";
import Link from "next/link";
import Router from "next/router";
import UsersBoldIcon from "../svg/usersBold.svg";
import HeartBoldIcon from "../svg/likeBold.svg";
import ListBoldIcon from "../svg/listBold.svg";
import LogoutIcon from "../svg/logout.svg";
import MenuIcon from "../svg/menu-4.svg";
import CloseIcon from "../svg/closeBold.svg";
import AvatarIcon from "../svg/defaultAvatar.svg";
import {
	UserItem,
	Option,
	MenuContainer,
	ImgStyles
} from "./styles/DropdownStyles";
import { LoginContainer } from "./styles/Jumbotron";

Modal.setAppElement("#__next");

const ModalStyles = {
	content: {
		top: "50%",
		left: "50%",
		right: "auto",
		bottom: "auto",
		marginRight: "-50%",
		transform: "translate(-50%, -50%)",
		background: "rgba(21, 189, 118, 0.8)",
		width: "100vw",
		height: "100vh",
		zIndex: 10
	}
};

class UserDropdown extends Component {
	state = {
		open: false,
		isModalOpen: false
	};

	openModal = () => {
		this.setState({ isModalOpen: true });
	};

	closeModal = () => {
		this.setState({ isModalOpen: false });
	};

	logout = e => {
		localStorage.removeItem("jwtToken");
		Router.push("/");
		location.reload();
	};

	render() {
		const { user } = this.props;
		return (
			<LoginContainer>
				<UserItem onClick={this.openModal}>
					<MenuIcon />
					{user.fname}
					<ImgStyles>
						{user.photo ? (
							<img src={user.photo} alt="profilbild" />
						) : (
							<AvatarIcon />
						)}
					</ImgStyles>
				</UserItem>
				<Modal
					isOpen={this.state.isModalOpen}
					onAfterOpen={this.afterOpenModal}
					onRequestClose={this.closeModal}
					contentLabel="Menu Modal"
					style={ModalStyles}
					closeTimeoutMS={800}
				>
					<MenuContainer>
						<div>
							<Option onClick={this.closeModal}>
								<a>
									<CloseIcon />
									Stäng
								</a>
							</Option>
						</div>
						<div>
							<Option onClick={this.closeModal}>
								<Link
									href={{
										pathname: "/profile",
										query: {
											id: user._id
										}
									}}
								>
									<a>
										<UsersBoldIcon />
										Min profil
									</a>
								</Link>
							</Option>
						</div>
						<div>
							<Option onClick={this.closeModal}>
								<Link href="/saved">
									<a>
										<HeartBoldIcon />
										Sparade Recept
									</a>
								</Link>
							</Option>
						</div>
						<div>
							<Option onClick={this.closeModal}>
								<Link
									href={{
										pathname: "/inkopslistor",
										query: {
											id: user._id
										}
									}}
								>
									<a>
										<ListBoldIcon />
										Inköpslistor
									</a>
								</Link>
							</Option>
						</div>
						<div>
							<Option onClick={this.logout}>
								<a>
									<LogoutIcon />
									Logga ut
								</a>
							</Option>
						</div>
					</MenuContainer>
				</Modal>
			</LoginContainer>
		);
	}
}

export default UserDropdown;

UserDropdown.propTypes = {
	user: PropTypes.object.isRequired
};
