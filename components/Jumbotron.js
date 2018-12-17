import React, { Component } from "react";
import Link from "next/link";
import { StyledJumbotron } from "./styles/Jumbotron";
import { Button } from "./styles/Button";
import NotesIcon from "../svg/notes.svg";

class Jumbotron extends Component {
	render() {
		return (
			<StyledJumbotron>
				<h1>Snabba enkla recept för att göra dig vardag smidigare</h1>
				<div style={{ width: "400px", margin: "0 auto" }}>
					<Link href="/recipe">
						<a>
							<Button primary fullWidth style={{ animationDelay: "300ms" }}>
								<NotesIcon /> Lägg till recept
							</Button>
						</a>
					</Link>
				</div>
			</StyledJumbotron>
		);
	}
}

export default Jumbotron;
