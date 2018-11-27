import styled from "styled-components";

export const Button = styled.button`
	display: inline-block;
	width: 100%;
	border-radius: 30px;
	padding: 1rem 2rem;
	margin: 0.5rem 0;
	background: ${props => (props.primary ? props.theme.green : "transparent")};
	color: ${props => (props.primary ? props.theme.white : props.theme.green)};
	border: 1px solid
		${props => (props.primary ? "transparent" : props.theme.lightgrey)};
	outline: none;
	box-shadow: ${props => props.theme.bs};
	font-weight: 700;
	transition: 0.1s ease-in all;
	cursor: pointer;
	a {
		color: ${props => (props.primary ? props.theme.white : props.theme.green)};
	}
	i {
		margin-right: 1rem;
	}
	&:hover {
		background: ${props =>
			props.primary ? props.theme.white : props.theme.green};
		color: ${props => (props.primary ? props.theme.green : props.theme.white)};
	}
`;
