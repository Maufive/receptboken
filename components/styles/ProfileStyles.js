import styled from "styled-components";
import { fadeIn } from "./keyframes";

export const ProfileContainer = styled.div`
	margin: 0 auto;
	width: 800px;
	background: ${props => props.theme.white};
	color: ${props => props.theme.grey};
	animation: ${fadeIn} 500ms ease-out;
`;

export const ProfileDescription = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding-top: 3rem;
	> div {
		width: 50%;
		align-items: center;
		display: flex;
		flex-direction: column;
	}
	margin-bottom: 5rem;
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
