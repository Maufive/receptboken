import styled from "styled-components";
import { fadeIn, wave } from "./keyframes";
import { relative } from "path";

export const customStyles = {
	content: {
		top: "50%",
		left: "50%",
		right: "auto",
		bottom: "auto",
		marginRight: "-50%",
		transform: "translate(-50%, -50%)",
		background: "#fff",
		zIndex: 10
	}
};

export const StyledJumbotron = styled.div`
	margin-bottom: 3rem;
	h1,
	h2,
	h3 {
		text-align: center;
		margin: 0 auto;
		opacity: 0;
		animation: ${fadeIn} 800ms ease 200ms 1 normal forwards running;
		text-shadow: 0px 5px 12px rgba(0, 0, 0, 0.08);
		width: fit-content;
	}
	h1 {
		letter-spacing: 1.5px;
		font-size: 5rem;
		@media (max-width: ${props => props.theme.mobileBreakpoint}) {
			font-size: 4rem;
		}
	}
	h2 {
		margin-bottom: 3rem;
		padding: 0 2rem;
	}
	@media (max-width: ${props => props.theme.mobileBreakpoint}) {
		margin: 3rem 0;
	}
`;

export const LoginContainer = styled.div`
	display: flex;
	justify-content: space-around;
	z-index: 499 !important;
`;

export const Wave = styled.span`
	margin-right: 1rem;
	animation: ${wave} 350ms ease alternate;
	animation-delay: 800ms;
	animation-iteration-count: 8;
	transform-origin: 50% 100%;
	font-size: 2rem;
	transform: rotate(0deg);
`;

export const JumbotronButtons = styled.div`
	width: 40rem;
	margin: 0 auto;
	@media (max-width: 550px) {
		width: 35rem;
	}
`;
