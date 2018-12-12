import React, { Component } from "react";
import Link from "next/link";
import styled from "styled-components";
import Nav from "./Nav";
import LoginModal from "./LoginModal";
import UserDropdown from "./UserDropdown";

const Logo = styled.h1`
	font-family: "Playfair Display";
	font-weight: 400;
	margin: 0;
`;
const StyledHeader = styled.header`
	.bar {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 2rem;
		height: 75px;
		width: ${props => props.theme.maxWidth};
		margin: 0 auto;
		@media (max-width: ${props => props.theme.mobileBreakpoint}) {
			height: 40px;
		}
	}
`;

class Header extends Component {
	render() {
		const { user } = this.props;
		return (
			<StyledHeader>
				<div className="bar">
					<Link href="/">
						<a>
							<Logo>Receptboken</Logo>
						</a>
					</Link>
					<Nav />
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
