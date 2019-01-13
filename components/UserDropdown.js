import React, { Component } from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import Router from "next/router";
import UsersBoldIcon from "../svg/usersBold.svg";
import HeartBoldIcon from "../svg/likeBold.svg";
import ListBoldIcon from "../svg/listBold.svg";
import LogoutIcon from "../svg/logout.svg";
import MenuIcon from "../svg/menu-4.svg";

import {
	UserDropdownStyles,
	DropDownContainer,
	Square,
	UserItem,
	Option,
	DropdownBackground
} from "./styles/DropdownStyles";

class UserDropdown extends Component {
	state = {
		open: false
	};

	openDropdown = () => {
		this.setState({ open: true }, () => {
			document.addEventListener("click", this.closeDropdown);
		});
	};

	closeDropdown = e => {
		this.setState({ open: false }, () => {
			document.removeEventListener("click", this.closeDropdown);
		});
	};

	logout = e => {
		localStorage.removeItem("jwtToken");
		Router.push("/");
		location.reload();
	};

	render() {
		const { user } = this.props;
		return (
			<UserDropdownStyles>
				<UserItem onClick={() => this.openDropdown()}>
					<MenuIcon />
					{user.fname}
					{user.photo && <img src={user.photo} alt="profilbild" />}
				</UserItem>
				{this.state.open && (
					<DropdownBackground
						ref={element => {
							this.dropdown = element;
						}}
					>
						<Square />
						<DropDownContainer>
							<div>
								<Option>
									<Link
										href={{
											pathname: "/profile",
											query: {
												id: user._id
											}
										}}
										onClick={() => this.closeDropdown()}
									>
										<a>
											<UsersBoldIcon />
											Min profil
										</a>
									</Link>
								</Option>
							</div>
							<div>
								<Option>
									<Link href="/saved">
										<a>
											<HeartBoldIcon />
											Sparade Recept
										</a>
									</Link>
								</Option>
							</div>
							<div>
								<Option>
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
									<LogoutIcon />
									Logga ut
								</Option>
							</div>
						</DropDownContainer>
					</DropdownBackground>
				)}
			</UserDropdownStyles>
		);
	}
}

export default UserDropdown;

UserDropdown.propTypes = {
	user: PropTypes.object.isRequired
};
