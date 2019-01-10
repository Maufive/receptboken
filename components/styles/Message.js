import styled from "styled-components";
import { slideIn, slideInOut } from "./keyframes";

export const MessageStyles = styled.div`
	position: absolute;
	top: 2%;
	left: 50%;
	animation: ${slideInOut} 4s ease-in;
	div {
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
		border: 2px solid ${props => props.theme.grey};
		i {
			margin-right: 1rem;
		}
		* {
			box-shadow: ${props => props.theme.bs};
		}
	}
`;
