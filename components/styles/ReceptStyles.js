import styled from "styled-components";
import { fadeIn } from "./keyframes";

export const Wrapper = styled.div`
	width: 800px;
	margin: 0 auto;
	padding: 2rem;
	background: ${props => props.theme.white};
	color: ${props => props.theme.grey};
	box-shadow: ${props => props.theme.bsHard};
	animation: ${fadeIn} 500ms ease-out;
	h1 {
		color: ${props => props.theme.grey};
		margin-top: 0;
	}
`;

export const DetailsBar = styled.div`
	display: flex;
	align-items: center;
	font-size: 2rem;
`;

export const ImageAndTags = styled.div`
	padding: 1.5rem 0;
	display: flex;
	font-weight: 700;
	> img {
		margin-right: 2rem;
		max-width: 400px;
	}
	> div {
		height: "fit-content";
	}
`;

export const ListItem = styled.div`
	padding: 1rem 0;
`;

export const Tag = styled.span`
	margin: 0 0.5rem;
	background: ${props => props.theme.green};
	color: ${props => props.theme.white};
	padding: 0.5rem 1rem;
	border-radius: 3px;
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
`;
