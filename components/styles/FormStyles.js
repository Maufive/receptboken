import styled from "styled-components";
import { fadeIn, slideUp } from "./keyframes";

export const StyledForm = styled.form`
	width: 500px;
	animation: ${fadeIn} 500ms ease-out;
	margin: 0 auto;
	padding: 3rem 5rem;
	border-radius: 5px;
	border: 2px solid ${props => props.theme.lightgrey};
	background: ${props => props.theme.white};
	box-shadow: ${props => props.theme.bsHard};

	h2,
	h3 {
		color: ${props => props.theme.grey};
		margin-bottom: 3rem;
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

	input[type="text"],
	input[type="password"],
	input[type="email"] {
		font-size: 2rem;
		padding: 1rem 1.5rem;
		width: 100%;
		border: 1px solid ${props => props.theme.lightgrey};
		border-radius: 5px;
	}

	input[type="number"] {
		width: 60px;
		padding: 1rem;
		background: transparent;
		font-size: 1.5rem;
		margin-right: 1rem;
	}

	input[type="number"]:focus {
		background: ${props => props.theme.green};
		color: ${props => props.theme.white};
		border-radius: 5px;
	}

	select {
		font-size: 1.5rem;
		padding: 1.5rem;
		margin: 0;
	}

	select:focus {
		outline-color: ${props => props.theme.green};
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
	}

	input:focus + label {
		border: none;
		font-size: 1rem;
		transform: translateY(-3.5rem);
		color: ${props => props.theme.mediumgrey};
	}

	input[type="text"]:valid,
	input[type="password"]:valid,
	input[type="email"]:valid {
		border: 2px solid ${props => props.theme.green};
	}

	input:invalid {
		border: 2px solid ${props => props.theme.lightgrey};
	}
	input:invalid + label {
		color: ${props => props.theme.mediumgrey};
	}
	input:valid + label {
		font-size: 1rem;
		transform: translateY(-3.5rem);
		color: ${props => props.theme.mediumgrey};
	}

	textarea {
		width: 100%;
		height: 10rem;
		outline: none;
		font-size: 1rem;
		padding: 1rem;
		border: 1px solid ${props => props.theme.offWhite};
		border-radius: 5px;
		font-size: 1.5rem;
	}

	textarea:focus + label {
		border: none;
		font-size: 1rem;
		transform: translateY(-4rem);
		color: ${props => props.theme.mediumgrey};
	}

	textarea:valid {
		border: 2px solid ${props => props.theme.green};
	}

	textarea:invalid {
		border: 2px solid ${props => props.theme.lightgrey};
	}

	textarea:valid + label {
		font-size: 1rem;
		transform: translateY(-4rem);
		color: ${props => props.theme.mediumgrey};
	}

	p {
		margin-right: 1rem;
		font-weight: 700;
	}

	svg {
		height: 12px;
		width: 12px;
		fill: ${props => props.theme.grey};
	}
`;
