import React, { Component } from "react";
import Link from "next/link";
import Logout from "./Logout";
import UserIcon from "../svg/user.svg";
import { DropDownContainer, Square, UserItem } from "./styles/DropdownStyles";

class UserDropdown extends Component {
	state = {
		open: false
	};

	openDropdown = () => {
		this.setState({ open: true });
	};

	closeDropdown = () => {
		this.setState({ open: false });
	};

	render() {
		const { user } = this.props;
		return (
			<div style={{ width: "fit-content", position: "relative" }}>
				<UserItem onClick={this.openDropdown}>
					<UserIcon />
					Svennis Jättelångtnamn
					{/* {user.fname + " " + user.lname} */}
				</UserItem>
				{this.state.open && (
					<div style={{ position: "relative" }}>
						<Square />
						<DropDownContainer>
							<p>Min profil</p>
							<p>Sparade recept</p>
							<p>Logga ut</p>
						</DropDownContainer>
					</div>
				)}
			</div>
		);
	}
}

export default UserDropdown;
