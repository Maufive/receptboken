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
	padding: 1.5rem;
	h1 {
		text-align: center;
		margin: 0 auto;
		animation: ${slideRight} 300ms cubic-bezier(0.39, 0.575, 0.565, 1) both;
		text-shadow: 0px 5px 12px rgba(0, 0, 0, 0.08);
		width: fit-content;
	}
	div {
		width: 40rem;
		margin: 0 auto;
		@media (max-width: 550px) {
			width: 35rem;
		}
	}
`;

export const LoginContainer = styled.div`
	display: flex;
	justify-content: space-around;
`;
