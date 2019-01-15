import React from "react";
import Link from "next/link";
import styled from "styled-components";

const FooterStyles = styled.div`
	margin-top: 3rem;
	padding: 1.5rem;
	min-height: 15rem;
	background: ${props => props.theme.green};
	display: flex;
	align-items: center;
	justify-content: space-around;
	flex-direction: column;
	color: ${props => props.theme.offWhite};
	h2 {
		margin-block-end: 0;
		margin-block-start: 0;
	}
	a {
		text-decoration: underline;
	}

	@media (max-width: ${props => props.theme.mobileBreakpoint}) {
		min-height: 10rem;
	}
`;

const Footer = () => (
	<FooterStyles>
		<h2>Receptboken</h2>
		<p>
			Skapad av:{" "}
			<Link href="https://niklasalbinsson.se">
				<a taget="_blank">Niklas Albinsson</a>
			</Link>{" "}
			/ 2019
		</p>
	</FooterStyles>
);

export default Footer;
