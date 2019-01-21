import styled from "styled-components";
import { slideInOut } from "./keyframes";

export const MessageStyles = styled.div`
	position: absolute;
	z-index: 999;
	top: 4%;
	left: 50%;
	width: fit-content;
	animation: ${slideInOut} 4s ease-in;
	display: flex;
	justify-content: center;
	align-items: center;
	@media (max-width: ${props => props.theme.mobileBreakpoint}) {
		width: 80%;
	}
	div {
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
		border-radius: 10px;
		left: -50%;
		background: ${props => props.background};
		color: ${props => props.theme.offWhite};
		padding: 1rem 3rem;
		font-weight: 700;
		border: 1px solid ${props => props.theme.darkGreen};
		* {
			box-shadow: ${props => props.theme.bs};
		}
		svg {
			height: 2.5rem;
			width: 2.5rem;
			fill: ${props => props.theme.offWhite};
			margin-right: 1rem;
			@media (max-width: ${props => props.theme.mobileBreakpoint}) {
				height: 3rem;
				width: 3rem;
			}
		}
	}
`;
