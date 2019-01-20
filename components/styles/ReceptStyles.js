import styled from "styled-components";
import { fadeIn } from "./keyframes";

export const Wrapper = styled.div`
	margin: 0 auto;
	padding: 2rem;
	background: ${props => props.theme.offWhite};
	color: ${props => props.theme.grey};
	max-width: 80rem;
	animation: ${fadeIn} 800ms ease 1 normal forwards running;
	border: 2px solid ${props => props.theme.lightgrey};
	border-radius: ${props => props.theme.bRadius};
	h1 {
		color: ${props => props.theme.grey};
		margin-top: 0;
	}

	@media (max-width: ${props => props.theme.mobileBreakpoint}) {
		width: 100%;
		padding: 1.5rem;
		justify-content: center;
		align-items: center;
		border: none;
		h1 {
			text-align: center;
		}
	}

	@media (max-width: 350px) {
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
		flex-wrap: wrap;
	}
`;

export const ImageAndTags = styled.div`
	padding: 1.5rem 0;
	display: flex;
	font-weight: 700;
	width: 100%;
	@media (max-width: ${props => props.theme.mobileBreakpoint}) {
		flex-wrap: wrap;
	}
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	h2 {
		font-size: 2.5rem;
		font-weight: 700;
		font-family: "Josefin Sans";
	}
`;

export const Beskrivning = styled.div`
	font-size: 2rem;
	padding: 2rem;
	max-width: 600px;
	div {
		display: flex;
		align-items: center;
		margin-bottom: 2rem;
		padding-bottom: 2rem;
		border-bottom: 1px dashed ${props => props.theme.lightgrey};
	}
	@media (max-width: ${props => props.theme.mobileBreakpoint}) {
		padding: 0.5rem;
	}
`;

export const Dot = styled.span`
	height: 1.2rem;
	min-width: 1.2rem;
	border-radius: 50%;
	margin-right: 2rem;
	background: ${props => props.theme.green};
`;

export const Ingredienser = styled.div`
	display: flex;
	flex-direction: column;
	max-height: 600px;
	flex-wrap: wrap;
	margin-bottom: 3rem;
	> div {
		display: flex;
		align-items: center;
		margin-bottom: 1rem;
		padding-bottom: 1rem;
		p {
			padding: 1rem 0;
			width: fit-content;
			color: ${props => props.theme.black};
			font-size: 2rem;
			span {
				height: 1.2rem;
				min-width: 1.2rem;
				border-radius: 50%;
				margin-right: 2rem;
				background: ${props => props.theme.green};
				border: 1px solid red;
			}
		}
	}
	@media (max-width: ${props => props.theme.mobileBreakpoint}) {
		max-height: 100%;
		margin-bottom: 1rem;
	}
`;

export const Tag = styled.span`
	margin-right: 3px;
	background: ${props => props.theme.offWhite};
	color: ${props => props.theme.grey};
	font-weight: 700;
	padding: 0.5rem 0;
	border-radius: 3px;
	display: flex;
	align-items: center;

	svg {
		margin-right: 1rem;
		height: 1.5rem;
		width: 1.5rem;
		fill: ${props => props.theme.green};
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

export const ImgContainer = styled.div`
	width: fit-content;
	> img {
		margin-right: 2rem;
		max-width: 350px;
	}

	@media (max-width: ${props => props.theme.mobileBreakpoint}) {
		flex-wrap: wrap;
		> img {
			margin-right: 0;
			margin-bottom: 1rem;
			max-width: 100%;
		}
	}
`;
