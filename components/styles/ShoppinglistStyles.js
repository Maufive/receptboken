import styled from "styled-components";
import { fadeIn } from "./keyframes";

export const List = styled.ul`
	list-style: none;
	font-size: 2rem;
	line-height: 2;
	a {
		color: ${props => props.theme.grey};
	}
	> li {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		margin: 1rem;
		padding: 1rem;
		border-bottom: 2px dashed ${props => props.theme.lightgrey};
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

export const ListContainer = styled.div`
	background: ${props => props.theme.offWhite};
	padding: 2rem 4rem;
	border-radius: 5px;
	width: 800px;
	margin: 0 auto;
	opacity: 0;
	animation: ${fadeIn} 800ms ease 1 normal forwards running;
	display: flex;
	flex-direction: column;
	align-items: center;
	h1 {
		font-family: "Josefin Sans";
		font-weight: 700;
	}
	h1,
	h2,
	h3 {
		margin-block-end: 0;
		margin-block-start: 0;
	}
	@media (max-width: ${props => props.theme.mobileBreakpooint}) {
		width: 100%;
	}
`;
