import React, { Component } from "react";
import Link from "next/link";
import styled from "styled-components";
import Logout from "./Logout";

const DropDownContainer = styled.div``;

const UserItem = styled.p`
	margin: 0;
	font-size: 1.5rem;
`;

class UserDropdown extends Component {
	render() {
		const { user } = this.props;
		return (
			<DropDownContainer>
				<Link
					href={{
						pathname: "/profile",
						query: {
							id: user._id
						}
					}}
				>
					<a>
						<UserItem>{user.fname + " " + user.lname}</UserItem>
					</a>
				</Link>
			</DropDownContainer>
		);
	}
}

export default UserDropdown;
