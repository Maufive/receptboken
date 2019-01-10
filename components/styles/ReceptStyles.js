import styled from "styled-components";
import { fadeIn, growRight } from "./keyframes";

export const Wrapper = styled.div`
	margin: 0 auto;
	padding: 2rem;
	background: ${props => props.theme.white};
	color: ${props => props.theme.grey};
	box-shadow: ${props => props.theme.bsHard};
	max-width: 80rem;
	animation: ${fadeIn} 500ms ease-out;
	h1 {
		color: ${props => props.theme.grey};
		margin-top: 0;
	}

	@media (max-width: ${props => props.theme.mobileBreakpoint}) {
		width: 50rem;
		padding: 1rem;
		justify-content: center;
		align-items: center;
		h1 {
			text-align: center;
		}
	}

	@media (max-width: 35rem) {
		width: 100%;
	}
`;

export const DetailsBar = styled.div`
	display: flex;
	align-items: center;
	font-size: 2rem;
	@media (max-width: ${props => props.theme.mobileBreakpoint}) {
		font-size: 1.5rem;
		justify-content: center;
		align-items: center;
	}
`;

export const ImageAndTags = styled.div`
	padding: 1.5rem 0;
	display: flex;
	font-weight: 700;
	> img {
		margin-right: 2rem;
		max-width: 300px;
		max-height: 300px;
	}
	> div {
		height: "fit-content";
	}

	@media (max-width: ${props => props.theme.mobileBreakpoint}) {
		flex-direction: column;
		justify-content: center;
		align-items: center;
		> img {
			margin-right: 0;
			margin-bottom: 1rem;
		}
	}
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	h2 {
		font-size: 2.5rem;
		margin: 0 auto;
	}
`;

export const Beskrivning = styled.div`
	font-size: 2rem;
	font-family: "Proza Libre";
	padding: 2rem;
	max-width: 600px;
	div {
		display: flex;
		align-items: center;
		margin-bottom: 4rem;
		span {
			height: 1.2rem;
			min-width: 1.2rem;
			border-radius: 50%;
			margin-right: 2rem;
			background: ${props => props.theme.green};
		}
	}
`;

export const Ingredienser = styled.div`
	display: flex;
	flex-direction: column;
	max-height: 500px;
	flex-wrap: wrap;
	align-items: center;
	p {
		padding: 1rem 0;
		color: ${props => props.theme.black};
		font-family: "Proza Libre";
		font-weight: 400;
		border-bottom: 1px solid ${props => props.theme.lightgrey};
		font-size: 2rem;
	}
	@media (max-width: ${props => props.theme.mobileBreakpoint}) {
		max-height: 100%;
		margin-bottom: 1rem;
	}
`;

export const Tag = styled.span`
	margin: 0 0.5rem;
	background: ${props => props.theme.green};
	color: ${props => props.theme.offWhite};
	border: 1px solid ${props => props.theme.green};
	padding: 0.5rem 1rem;
	border-radius: 3px;
	transition: all 200ms ease-out;
	i {
		color: ${props => props.theme.green};
	}
`;

export const IconContainer = styled.div`
	margin-right: 2rem;
	display: flex;
	align-items: center;
	svg {
		fill: ${props => props.theme.grey};
		height: 20px;
		width: 20px;
		margin-right: 0.5rem;
	}

	@media (max-width: ${props => props.theme.mobileBreakpoint}) {
		margin-right: 1rem;
	}
`;

export const DeleteContainer = styled.div`
	margin-right: 2rem;
	display: flex;
	align-items: center;
	color: ${props => props.theme.red};
	cursor: pointer;
	svg {
		fill: ${props => props.theme.red};
		height: 20px;
		width: 20px;
		margin-right: 0.5rem;
	}
	@media (max-width: ${props => props.theme.mobileBreakpoint}) {
		margin-right: 10rem;
	}
`;
