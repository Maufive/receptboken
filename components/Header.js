import React, { Component } from "react";
import Link from "next/link";
import styled from "styled-components";
import LoginModal from "./LoginModal";
import UserDropdown from "./UserDropdown";
import GroceriesIcon from "../svg/groceries2.svg";

const Logo = styled.h2`
	margin: 0;
	margin-block-end: 0;
	margin-block-start: 0;
	color: ${props => props.theme.offWhite};
	font-family: "Montserrat";
	font-weight: 700;
	letter-spacing: 1px;
	font-size: 2rem;
`;
const StyledHeader = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 1rem 2rem;
	/* border-bottom: 5px solid ${props => props.theme.yellow}; */
	height: 60px;
	background: rgb(21,189,118);
	background: linear-gradient(90deg, rgba(21,189,118,1) 0%, rgba(154, 202, 60, 1) 100%);
	width: 100%;
	margin-bottom: 3rem;

	> a {
		display: flex;
		align-items: center;
		padding: 0;
		svg {
		height: 3rem;
		width: 3rem;
		margin-right: 0.5rem;
	}
	}

`;

class Header extends Component {
	render() {
		const { user } = this.props;
		return (
			<StyledHeader>
				<Link href="/">
					<a>
						<GroceriesIcon />
						<Logo>Receptboken</Logo>
					</a>
				</Link>
				{/* <Nav /> */}
				<div>
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
