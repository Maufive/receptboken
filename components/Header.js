import React, { Component } from "react";
import Link from "next/link";
import styled from "styled-components";
import Nav from "./Nav";
import LoginModal from "./LoginModal";
import UserDropdown from "./UserDropdown";

const Logo = styled.h2`
	font-family: "Playfair Display";
	font-weight: 400;
	margin: 0;
	color: ${props => props.theme.offWhite};
`;
const StyledHeader = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 1rem 2rem;
	/* border-bottom: 5px solid ${props => props.theme.yellow}; */
	height: 60px;
	background: ${props => props.theme.black};
	width: 100%;
	margin-bottom: 3rem;
`;

class Header extends Component {
	render() {
		const { user } = this.props;
		return (
			<StyledHeader>
				<Link href="/">
					<a>
						<Logo>Receptboken</Logo>
					</a>
				</Link>
				<Nav />
				<div style={{ width: "200px" }}>
					{user ? (
						<UserDropdown user={user} />
					) : (
						<LoginModal setUser={this.props.setUser} />
					)}
				</div>
			</StyledHeader>
		);
	}
}

export default Header;
