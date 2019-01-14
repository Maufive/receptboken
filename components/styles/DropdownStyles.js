import styled from "styled-components";
import { fadeIn } from "./keyframes";

export const UserDropdownStyles = styled.div`
	width: 100%;
	display: flex;
	justify-content: flex-end;
`;

export const MenuContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-evenly;
	padding: 2rem;
	height: 100%;
`;

export const DropdownBackground = styled.div`
	width: 100%;
	top: 100%;
`;

export const DropDownContainer = styled.div`
	background: ${props => props.theme.grey};
	padding: 0.5rem 2rem;
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
	display: flex;
	align-items: center;
	cursor: pointer;
	margin: 0;
	outline: none;
	color: ${props => props.theme.offWhite};
	font-weight: 700;
	svg {
		width: 2rem;
		height: 2rem;
		margin-right: 1rem;
		fill: ${props => props.theme.offWhite};
	}
	img {
		height: 3rem;
		width: 3rem;
		border-radius: 50%;
		margin-left: 1rem;
	}
`;

export const ImgStyles = styled.div`
	display: flex;
	align-items: center;
	svg {
		width: 3rem;
		height: 3rem;
		margin-left: 1rem;
		fill: ${props => props.theme.offWhite};
	}
	img {
		height: 3rem;
		width: 3rem;
		border-radius: 50%;
		margin-left: 1rem;
	}
`;

export const Square = styled.div`
	background: ${props => props.theme.grey};
	width: 2.5rem;
	height: 2.5rem;
	transform: rotate(45deg);
	margin: 0 auto;
`;

export const Option = styled.span`
	color: ${props => props.theme.offWhite};
	font-size: 2rem;
	font-weight: 700;
	a {
		display: flex;
		align-items: center;
		color: ${props => props.theme.offWhite};
		transition: all 400ms ease;
		padding: 1rem 2rem;
		border-radius: 5px;
		&:hover {
			transform: translateY(-5px);
			cursor: pointer;
			background: ${props => props.theme.offWhite};
			color: ${props => props.theme.green};
			svg {
				fill: ${props => props.theme.green};
			}
		}
	}
	svg {
		fill: ${props => props.theme.offWhite};
		height: 3rem;
		width: 3rem;
		margin-right: 2rem;
	}
`;
