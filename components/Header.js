import React, { Component } from "react";
import Link from "next/link";
import Router from "next/router";
import NProgress from "nprogress";
import LoginModal from "./LoginModal";
import MenuModal from "./MenuModal";
import { StyledHeader, ButtonContainer, Logo } from "./styles/HeaderStyles";

Router.onRouteChangeStart = () => {
	NProgress.start();
};
Router.onRouteChangeComplete = () => {
	NProgress.done();
};

Router.onRouteChangeError = () => {
	NProgress.done();
};

class Header extends Component {
	render() {
		const { user } = this.props;
		return (
			<StyledHeader>
				<div
					style={{
						width: "50%"
					}}
				>
					<Link href="/">
						<a>
							<Logo>RECEPTBOKEN</Logo>
						</a>
					</Link>
				</div>
				<ButtonContainer>
					{user ? (
						<MenuModal user={user} />
					) : (
						<LoginModal setUser={this.props.setUser} />
					)}
				</ButtonContainer>
			</StyledHeader>
		);
	}
}

export default Header;
