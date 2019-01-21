import styled from "styled-components";
import { fadeIn } from "./keyframes";

export const List = styled.ul`
	list-style: none;
	font-size: 2rem;
	line-height: 2;
	a {
		color: ${props => props.theme.grey};
		margin: 2rem;
		display: flex;
		align-items: center;
		border-bottom: 1px dashed ${props => props.theme.green};
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
		height: 2rem;
		width: 2rem;
		margin-right: 1rem;
		fill: ${props => props.theme.green};
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
	@media (max-width: ${props => props.theme.mobileBreakpoint}) {
		width: 100%;
	}
`;
