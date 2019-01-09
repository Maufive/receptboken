import React, { Component } from "react";
import styled from "styled-components";

const PaginationStyles = styled.div`
	margin: 0 auto;
	padding: 1rem;
	background: transparent;
	color: ${props => props.theme.black};
	border: 1px solid ${props => props.theme.lightgrey};
	display: flex;
	justify-content: center;
	p {
		margin-right: 1rem;
		font-weight: 700;
	}
`;

const Pagination = () => (
	<PaginationStyles>
		<p>Sida: </p>
		<p>1</p>
		<p>2</p>
		<p>3</p>
		<p>4</p>
		<p>5</p>
		<p>Mer recept →</p>
	</PaginationStyles>
);

export default Pagination;
