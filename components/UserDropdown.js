import React, { Component } from "react";
import Link from "next/link";
import Logout from "./Logout";
import ChefIcon from "../svg/chef.svg";
import UsersIcon from "../svg/users.svg";
import HeartIcon from "../svg/like-1.svg";
import LogoutIcon from "../svg/logout.svg";
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
								<Link
									href={{
										pathname: `/profile`
										// query: {
										// 	id: user._id
										// }
									}}
									onClick={() => this.closeDropdown()}
								>
									<a>
										<UsersIcon />
										<Option>Min profil</Option>
									</a>
								</Link>
							</div>
							<div>
								<HeartIcon />
								<p>Sparade recept</p>
							</div>
							<div>
								<LogoutIcon />
								<p>Logga ut</p>
							</div>
						</DropDownContainer>
					</DropdownBackground>
				)}
			</UserDropdownStyles>
		);
	}
}

export default UserDropdown;
