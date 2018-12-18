import styled from "styled-components";
import { flash } from "./keyframes";

export const List = styled.ul`
	list-style: none;
	a {
		color: ${props => props.theme.grey};
	}
	> div {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		margin-bottom: 1rem;
	}
	svg {
		fill: ${props => props.theme.green};
		height: 20px;
		width: 20px;
		border: 1px solid ${props => props.theme.green};
		padding: 4px;
		border-radius: 50%;
		cursor: pointer;
		transition: all 200ms ease-out;
		&:hover {
			fill: ${props => props.theme.white};
			background: ${props => props.theme.green};
			border: 1px solid ${props => props.theme.white};
		}
	}
`;
