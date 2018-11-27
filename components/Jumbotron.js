import React, { Component } from "react";
import styled from "styled-components";
import Link from "next/link";
import { Button } from './styles/Button';

const StyledJumbotron = styled.div`
	margin: 0 auto;
	width: 100%;
	text-align: center;
	font-family: "Playfair Display";
`;

class Jumbotron extends Component {
	render() {
		return (
			<StyledJumbotron>
				<h1>Snabba enkla recept för att göra dig vardag smidigare</h1>
				<Button primary>
					<Link href="/recipe">
						<a>Lägg till recept</a>
					</Link>
				</Button>
			</StyledJumbotron>
		);
	}
}

export default Jumbotron;
