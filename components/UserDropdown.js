import React, { Component } from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import Router from "next/router";
import ChefIcon from "../svg/chef.svg";
import UsersIcon from "../svg/users.svg";
import HeartIcon from "../svg/like-1.svg";
import LogoutIcon from "../svg/logout.svg";
import NotesIcon from "../svg/notes.svg";
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
					<ChefIcon />
					{user.fname + " " + user.lname}
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
									<Link href="/profile" onClick={() => this.closeDropdown()}>
										<a>
											<UsersIcon />
											Min profil
										</a>
									</Link>
								</Option>
							</div>
							<div>
								<Option>
									<Link href="/saved">
										<a>
											<HeartIcon />
											Sparade Recept
										</a>
									</Link>
								</Option>
							</div>
							<div>
								<Option>
									<NotesIcon />
									Inköpslistor
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
