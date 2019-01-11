import styled from "styled-components";
import { fadeIn } from "./keyframes";

export const Card = styled.div`
	width: 250px;
	margin-bottom: 2rem;
	background: ${props => props.theme.white};
	box-shadow: ${props => props.theme.bsHard};
	transition: all 150ms ease-in;
	opacity: 0;
	/* animation: ${fadeIn} 500ms cubic-bezier(0.39, 0.575, 0.565, 1) both; */
	animation: ${fadeIn} 800ms ease 600ms 1 normal forwards running;
	img {
		width: 250px;
		height: 250px;
	}
	h3 {
		text-align: center;
		color: ${props => props.theme.grey};
	}
	> div {
		height: 50px;
		display: flex;
		justify-content: space-around;
	}
	&:hover {
		box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.25);
		transform: translateY(-2px);
	}
	span {
		color: ${props => props.theme.grey};
		display: flex;
		align-items: center;
	}

	svg {
		height: 20px;
		width: 20px;
		fill: ${props => props.theme.grey};
		margin-right: 0.5rem;
	}

	@media (max-width: ${props => props.theme.mobileBreakpoint}) {
		width: 325px;
		img {
			width: 325px;
			height: 325px;
		}
	}
`;

export const SmallCard = styled.div`
	width: 200px;
	background: ${props => props.theme.white};
	box-shadow: ${props => props.theme.bsHard};
	transition: all 150ms ease-in;
	color: ${props => props.theme.grey};
	> div {
		padding: 0 1rem;
		display: flex;
		justify-content: space-between;
		h3 {
			margin: 0;
		}
	}
	&:hover {
		box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.25);
		transform: translateY(-2px);
	}
	span {
		color: ${props => props.theme.grey};
		display: flex;
		align-items: center;
	}

	svg {
		height: 20px;
		width: 20px;
		fill: ${props => props.theme.grey};
		margin-right: 0.5rem;
	}
`;

export const CardContainer = styled.div`
	display: flex;
	width: 100%;
	flex-wrap: wrap;
	justify-content: space-evenly;
	margin: 0 auto;
	/* background: ${props => props.theme.offWhite}; */
	background: transparent;
	border-radius: 5px;
	padding: 4rem 0;
	animation: ${fadeIn} 800ms ease 800ms 1 normal forwards running;
	opacity: 0;
	h2,
	h3 {
		margin: 0;
		text-align: center;
	}
	> div {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	a {
		color: ${props => props.theme.grey};
	}
`;
