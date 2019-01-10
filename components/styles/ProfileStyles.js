import styled from "styled-components";
import { fadeIn } from "./keyframes";

export const ProfileContainer = styled.div`
	margin: 0 auto;
	background: ${props => props.theme.white};
	color: ${props => props.theme.grey};
	box-shadow: ${props => props.theme.bsHard};
	animation: ${fadeIn} 500ms ease-out;
	width: fit-content;
	margin-bottom: 3rem;
	h2,
	h3 {
		margin-block-end: 0;
		margin-block-start: 0;
		margin-bottom: 0;
		padding: 0;
	}
`;

export const ProfileDescription = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 3rem;
	> div {
		margin: 1.5rem 0;
	}
`;

export const AvatarContainer = styled.div`
	border-radius: 50%;
	border: 3px solid ${props => props.theme.grey};
	height: 100px;
	width: 100px;
	display: flex;
	justify-content: center;
	align-items: center;
	overflow: hidden;
	margin: 1.5rem 0;
	img {
		max-height: 100%;
		max-width: 100%;
		border-radius: 50%;
	}
	svg {
		fill: ${props => props.theme.grey};
		height: 75px;
		width: 75px;
	}
`;

export const UppladdadeRecept = styled.div`
	background: ${props => props.theme.white};
	margin: 0 auto;
	padding: 1rem 0;
	h2 {
		text-align: center;
		margin-block-end: 0;
		margin-block-start: 0;
	}
`;
