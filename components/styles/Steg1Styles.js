import styled from "styled-components";
import { slideIn, fadeIn } from "./keyframes";

export const RecipeForm = styled.form`
	margin: 0 auto;
	width: 600px;
	padding: 2rem;
	background: ${props => props.theme.white};
	animation: ${fadeIn} 500ms ease-out;
	select {
		font-size: 1.5rem;
		padding: 1.5rem;
		margin: 0;
	}
	select:focus {
		outline-color: ${props => props.theme.green};
	}
	input[type="text"] {
		width: 100%;
		height: 100%;
		outline: none;
		font-size: 1.5rem;
		padding: 1.5rem;
		border: 1px solid ${props => props.theme.offWhite};
		border-radius: 10px;
	}
	input[type="text"]:focus {
		border: 2px solid ${props => props.theme.green};
	}
	input[type="number"] {
		font-size: 1.5rem;
		margin: 0 1rem;
	}
	input[type="number"]:focus {
		outline-color: ${props => props.theme.green};
	}
	h3 {
		margin: 1.5rem auto;
		width: 600;
	}
`;

export const IngrediensWrapper = styled.div`
	> * {
		margin: 1.5rem 0;
	}
`;

export const List = styled.ul`
	list-style: none;
	margin-top: 1.5rem 0;
	width: 100%;
`;

export const ListItem = styled.li`
	border: 1px solid blue;
	display: flex;
`;

export const ListItemDiv = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 1.5rem 0;
	margin: 0;
	animation: ${slideIn} 200ms ease-out;
	p {
		margin: 0;
	}

	> div > svg {
		height: 20px;
		width: 20px;
		fill: ${props => props.theme.grey};
		cursor: pointer;
		margin-left: 1rem;
		transition: all 200ms ease-in;
		&:hover {
			fill: ${props => props.theme.green};
			transform: translateY(-2px);
		}
	}
`;

export const Divider = styled.div`
	height: 3px;
	border-radius: 5px;
	width: 80%;
	background: ${props => props.theme.green};
	margin: 2rem auto;
`;

export const DetailsContainer = styled.div`
	label {
		color: ${props => props.theme.mediumgrey};
	}

	input[type="range"] {
		appearance: none; /* Hides the slider so that custom slider can be made */
		width: 100px; /* Specific width is required for Firefox. */
		background: transparent; /* Otherwise white in Chrome */
		margin-right: 1.5rem;
	}
	input[type="range"]:focus {
		outline: none; /* Removes the blue border. You should probably do some kind of focus styling for accessibility reasons though. */
	}

	input[type="range"]::-ms-track {
		width: 100px;
		cursor: pointer;

		/* Hides the slider so custom styles can be added */
		background: transparent;
		border-color: transparent;
		color: transparent;
	}

	input[type="range"]::-webkit-slider-thumb {
		-webkit-appearance: none;
		height: 15px;
		width: 15px;
		border-radius: 50%;
		background: ${props => props.theme.green};
		cursor: pointer;
		margin-top: -6px; /* You need to specify a margin in Chrome, but in Firefox and IE it is automatic */
		box-shadow: ${props => props.theme.bs};
	}

	input[type="range"]::-webkit-slider-runnable-track {
		width: 100px;
		height: 3px;
		cursor: pointer;
		box-shadow: ${props => props.theme.bs};
		background: ${props => props.theme.lightgrey};
		border-radius: 1.3px;
		border: 0.2px solid ${props => props.theme.lightgrey};
	}

	input[type="range"]:focus::-webkit-slider-runnable-track {
		background: ${props => props.theme.offWhite};
	}

	input[type="range"]::-moz-range-track {
		width: 100px;
		height: 3px;
		cursor: pointer;
		border-radius: 1.3px;
		border: 0.2px solid #010101;
		background: ${props => props.theme.green};
		box-shadow: ${props => props.theme.bs};
	}

	input[type="range"]::-ms-track {
		width: 100px;
		height: 3px;
		cursor: pointer;
		background: transparent;
		border-color: transparent;
		border-width: 16px 0;
		color: transparent;
	}
	input[type="range"]::-ms-fill-lower {
		background: ${props => props.theme.green};
		box-shadow: ${props => props.theme.bs};
		border-radius: 2.6px;
	}
	input[type="range"]:focus::-ms-fill-lower {
		background: ${props => props.theme.lightgrey};
	}
	input[type="range"]::-ms-fill-upper {
		background: ${props => props.theme.lightgrey};
		border-radius: 2.6px;
		box-shadow: ${props => props.theme.bs};
	}
	input[type="range"]:focus::-ms-fill-upper {
		background: ${props => props.theme.lightgrey};
	}

	> div {
		/* Div för slidern, vill ha label ovanför men slidern och P-tag inline*/
		margin-bottom: 3rem;
		> div {
			display: flex;
		}
	}
`;

export const Header = styled.div`
	width: 350px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	input[type="text"] {
		font-size: 3rem;
		border: none;
		border-bottom: 1px solid ${props => props.theme.lightgrey};
		border-radius: 0;
		outline: none;
	}
	input[type="text"]:focus {
		border: none;
		border-bottom: 1px solid ${props => props.theme.green} !important;
	}
`;
