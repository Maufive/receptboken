import styled from "styled-components";

export const DropDownContainer = styled.div`
	background: ${props => props.theme.green};
	color: ${props => props.theme.white};
	padding: 0.5rem 2rem;
	position: absolute;
	width: max-content;
	border-radius: ${props => props.theme.bRadius};
`;

export const UserItem = styled.p`
	cursor: pointer;
	margin: 0;
	display: flex;
	align-items: center;
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
