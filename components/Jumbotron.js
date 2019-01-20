import React, { Component } from "react";
import Link from "next/link";
import Infotron from "./Infotron";
import { StyledJumbotron, JumbotronButtons, Wave } from "./styles/Jumbotron";
import { Button } from "./styles/Button";
import ListBoldIcon from "../svg/listBold.svg";

class Jumbotron extends Component {
	render() {
		return (
			<StyledJumbotron>
				<h1>RECEPTBOKEN</h1>
				<h2>Spara dina recept på ett och samma ställe</h2>
				{!this.props.user && <Infotron />}
				<JumbotronButtons>
					{this.props.user ? (
						<Link href="/recipe">
							<a>
								<Button primary fullWidth style={{ animationDelay: "400ms" }}>
									<ListBoldIcon /> Lägg till recept
								</Button>
							</a>
						</Link>
					) : (
						<Link href="/register">
							<a>
								<Button primary fullWidth style={{ animationDelay: "400ms" }}>
									<Wave>👋</Wave>
									Registrera dig här
								</Button>
							</a>
						</Link>
					)}
				</JumbotronButtons>
			</StyledJumbotron>
		);
	}
}

export default Jumbotron;
