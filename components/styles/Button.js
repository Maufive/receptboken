import styled from "styled-components";
import { slideUp, slideIn } from "./keyframes";

export const Button = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	width: ${props => (props.fullWidth ? "100%" : "")};
	border-radius: 5px;
	padding: 1rem 4rem;
	margin: 1.5rem 0;
	background: ${props => (props.primary ? props.theme.green : "transparent")};
	color: ${props => (props.primary ? props.theme.white : props.theme.green)};
	border: 1px solid
		${props => (props.primary ? "transparent" : props.theme.lightgrey)};
	outline: none;
	font-weight: 700;
	transition: 0.1s ease-in all;
	animation: ${slideUp} 300ms cubic-bezier(0.68, -0.55, 0.265, 1.55) both;
	cursor: pointer;
	a {
		color: ${props => (props.primary ? props.theme.white : props.theme.green)};
	}
	i {
		margin-right: 1rem;
	}
	&:hover {
		color: ${props => props.theme.white};
		box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.25);
		transform: translateY(-1px);
		background: #15b26e;
		border: 1px solid #15b26e;
		svg {
			fill: ${props => props.theme.white};
		}
	}

	svg {
		margin-right: 1rem;
		height: 15px;
		width: 15px;
		fill: ${props => props.theme.white};
	}
`;

export const DisabledButton = styled(Button)`
	color: ${props => props.theme.lightgrey};
	margin: 1.5rem 0;
	width: ${props => (props.fullWidth ? "100%" : "")};
	box-shadow: none !important;
	&:hover {
		color: ${props => props.theme.lightgrey};
		background: transparent;
		border: 1px solid ${props => props.theme.lightgrey};
		transform: none;
	}

	svg {
		margin-right: 1rem;
		height: 12px;
		width: 12px;
		fill: ${props => props.theme.lightgrey};
	}
`;
