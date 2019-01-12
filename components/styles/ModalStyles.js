import styled from "styled-components";
import { fadeIn, slideUp } from "./keyframes";

export const LoginForm = styled.form`
	width: 400px;
	animation: ${fadeIn} 500ms ease-out;
	margin: 0 auto;
	background: ${props => props.theme.offWhite};
	padding: 2rem 4rem;
	border-radius: 5px;
	position: relative;
	z-index: 100;
	h2,
	h3 {
		color: ${props => props.theme.grey};
		margin-bottom: 3rem;
		margin-top: 0;
	}
	> div {
		width: 100%;
		position: relative;
		margin-bottom: 3rem;
		display: flex;
		align-items: center;
	}
	input,
	label {
		border: none;
	}

	input {
		font-size: 2rem;
		padding: 1.5rem;
		width: 100%;
		border: 1px solid ${props => props.theme.lightgrey};
		border-radius: 5px;
	}

	input:focus {
		outline: 0;
	}

	label {
		position: absolute;
		margin-left: 1rem;
		top: 21%;
		left: 0;
		transition: all 200ms ease-out;
		display: flex;
		align-items: center;
		> svg {
			margin-right: 0.5rem;
		}
	}
	input:focus + label {
		border: none;
		font-size: 1rem;
		transform: translateY(-3.5rem);
		color: ${props => props.theme.mediumgrey};
	}
	input:valid {
		border: 2px solid ${props => props.theme.green};
	}
	input:invalid {
	}
	input:invalid + label {
		color: ${props => props.theme.mediumgrey};
	}
	input:valid + label {
		font-size: 1rem;
		transform: translateY(-3.5rem);
		color: ${props => props.theme.mediumgrey};
	}

	svg {
		height: 12px;
		width: 12px;
		fill: ${props => props.theme.grey};
	}
`;
