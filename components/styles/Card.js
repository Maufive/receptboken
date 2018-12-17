import styled from "styled-components";
import { scaleUp, fadeIn } from "./keyframes";

export const Card = styled.div`
	width: 250px;
	margin-bottom: 2rem;
	background: ${props => props.theme.white};
	box-shadow: ${props => props.theme.bsHard};
	transition: all 150ms ease-in;
	animation: ${scaleUp} 500ms cubic-bezier(0.39, 0.575, 0.565, 1) both;
	animation-delay: 600ms;
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
	background: ${props => props.theme.white};
	border-radius: 5px;
	padding: 4rem 0;
	animation: ${fadeIn} 1000ms cubic-bezier(0.39, 0.575, 0.565, 1) both;
	margin-top: 5rem;
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
`;
