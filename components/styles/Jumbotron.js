import styled from "styled-components";
import { slideRight } from "./keyframes";

export const customStyles = {
	content: {
		top: "50%",
		left: "50%",
		right: "auto",
		bottom: "auto",
		marginRight: "-50%",
		transform: "translate(-50%, -50%)"
	}
};

export const StyledJumbotron = styled.div`
	margin: 0 auto;
	width: 800px;
	text-align: center;
	font-family: "Playfair Display";
	h1 {
		animation: ${slideRight} 300ms cubic-bezier(0.39, 0.575, 0.565, 1) both;
		text-shadow: 0px 5px 12px rgba(0, 0, 0, 0.1);
		width: fit-content;
	}
`;

export const LoginContainer = styled.div`
	display: flex;
	justify-content: space-around;
`;
