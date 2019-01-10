import styled from "styled-components";
import { fadeIn, slideIn, slideUp } from "./keyframes";

export const UserDropdownStyles = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	width: 200px;
`;

export const DropdownBackground = styled.div`
	animation: ${slideUp} 200ms ease-in-out;
	position: relative;
	display: flex;
	justify-content: flex-end;
	width: 200px;
`;

export const DropDownContainer = styled.div`
	background: ${props => props.theme.grey};
	padding: 0.5rem 2rem;
	position: absolute;
	border-radius: ${props => props.theme.bRadius};
	font-weight: 700;
	width: 100%;
	z-index: 15;
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
	color: ${props => props.theme.offWhite};
	font-weight: 700;
	svg {
		width: 20px;
		height: 20px;
		margin-right: 1rem;
		fill: ${props => props.theme.offWhite};
	}
`;

export const Square = styled.div`
	background: ${props => props.theme.grey};
	width: 2.5rem;
	height: 2.5rem;
	transform: rotate(45deg);
	margin: 0 auto;
	position: absolute;
	left: 60%;
`;

export const Option = styled.span`
	transition: all 200ms ease-in;
	color: ${props => props.theme.offWhite};
	a {
		color: ${props => props.theme.offWhite};
	}
	svg {
		fill: ${props => props.theme.offWhite};
	}
	&:hover {
		transform: translateX(3px);
		cursor: pointer;
	}
`;
