import React from "react";
import styled from "styled-components";

const FooterStyles = styled.div`
	margin-top: 3rem;
	min-height: 15rem;
	background: ${props => props.theme.green};
	display: flex;
	align-items: center;
	flex-direction: column;
	color: ${props => props.theme.offWhite};

	a {
		text-decoration: underline;
	}
`;

const Footer = () => (
	<FooterStyles>
		<h2>Receptboken</h2>
		<p>
			Skapad av: <a href="www.niklasalbinsson.se">Niklas Albinsson</a> / 2019
		</p>
	</FooterStyles>
);

export default Footer;
