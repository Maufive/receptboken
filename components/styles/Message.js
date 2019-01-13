import styled from "styled-components";
import { slideInOut } from "./keyframes";

export const MessageStyles = styled.div`
	position: absolute;
	top: 2%;
	left: 50%;
	width: 80%;
	animation: ${slideInOut} 4s ease-in;
	display: flex;
	justify-content: center;
	align-items: center;
	div {
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
		border-radius: 10px;
		left: -50%;
		background: ${props => props.background};
		color: ${props => props.theme.grey};
		padding: 1rem 3rem;
		font-weight: 700;
		border: 1px solid ${props => props.theme.grey};
		* {
			box-shadow: ${props => props.theme.bs};
		}
		svg {
			height: 2.5rem;
			width: 2.5rem;
			fill: ${props => props.theme.grey};
			margin-right: 1rem;
		}
	}
`;
