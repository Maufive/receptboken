import React, { Component } from "react";
import Link from "next/link";
import LoginModal from "./LoginModal";
import { StyledJumbotron } from "./styles/Jumbotron";
import { Button } from "./styles/Button";

class Jumbotron extends Component {
	render() {
		return (
			<StyledJumbotron>
				<h1>Snabba enkla recept för att göra dig vardag smidigare</h1>
				{/* {!this.props.user && (
					<LoginModal primaryButton setUser={this.props.setUser} />
				)} */}
				<div style={{ width: "400px", margin: "0 auto" }}>
					<Link href="/recipe">
						<a>
							<Button primary>
								<i className="icofont-chef" /> Lägg till recept
							</Button>
						</a>
					</Link>
				</div>
			</StyledJumbotron>
		);
	}
}

export default Jumbotron;
