import React, { Component } from "react";
import Link from 'next/link';

class MobileNav extends Component {
	constructor(props) {
		super(props);
		this.state = {
			open: false
		};
		this.toggleMenu = this.toggleMenu.bind(this);
	}

	toggleMenu() {
		if (this.state.open === false) {
			this.setState({ open: true });
			console.log("Open!");
		} else {
			this.setState({ open: false });
			console.log("Closed!");
		}
	}

	render() {
		return (
			<div className="mobile-nav">
				<span onClick={this.toggleMenu} className="mobile-nav-icon">
					Meny
				</span>
				<div
					className={`mobile-nav-container ${
						this.state.open ? "open" : "closed"
					}`}
				>
					<ul>
						<li>
							<Link
								exact
								to="/"
								activeClassName="active-link"
								onClick={this.toggleMenu}
							>
								Hem
							</Link>
						</li>
						<li>
							<Link
								to="/jobb/"
								activeClassName="active-link"
								onClick={this.toggleMenu}
							>
								Jobb
							</Link>
						</li>
					</ul>
					<span onClick={this.toggleMenu} className="mobile-nav-icon">
						✖︎
					</span>
				</div>
			</div>
		);
	}
}

export default MobileNav;
