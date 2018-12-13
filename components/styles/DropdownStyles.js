import styled from "styled-components";
import { fadeIn } from "./keyframes";

export const UserDropdownStyles = styled.div`
	width: fit-content;
	position: relative;
`;

export const DropdownBackground = styled.div`
	animation: ${fadeIn} 200ms ease-in-out;
	position: relative;
`;

export const DropDownContainer = styled.div`
	background: ${props => props.theme.green};
	color: ${props => props.theme.white};
	padding: 0.5rem 2rem;
	position: absolute;
	width: max-content;
	border-radius: ${props => props.theme.bRadius};
	font-weight: 700;
	> div {
		display: flex;
		align-items: center;
	}
	svg {
		width: 15px;
		height: 15px;
		margin-right: 1rem;
		fill: ${props => props.theme.white};
	}
`;

export const UserItem = styled.p`
	cursor: pointer;
	margin: 0;
	display: flex;
	align-items: center;
	outline: none;
	svg {
		width: 20px;
		height: 20px;
		margin-right: 1rem;
		fill: ${props => props.theme.green};
	}
`;

export const Square = styled.div`
	background: ${props => props.theme.green};
	width: 2.5rem;
	height: 2.5rem;
	transform: rotate(45deg);
	margin: 0 auto;
	position: absolute;
	left: 40%;
	top: 50%;
`;

export const Option = styled.span`
	color: ${props => props.theme.white};
	transition: all 200ms ease-in;
	&:hover {
		transform: translateX(10px);
		color: ${props => props.theme.offWhite};
	}
`;
