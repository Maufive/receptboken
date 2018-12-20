import styled from "styled-components";
import { fadeIn } from "./keyframes";

export const ProfileContainer = styled.div`
	margin: 0 auto;
	width: 1000px;
	background: ${props => props.theme.white};
	color: ${props => props.theme.grey};
	animation: ${fadeIn} 500ms ease-out;
	> div > img {
		height: 100px;
		width: 100px;
		border-radius: 50%;
	}
`;

export const ProfileDescription = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	> div {
		width: 50%;
		align-items: center;
		display: flex;
		flex-direction: column;
	}
`;

export const AvatarContainer = styled.div`
	border-radius: 50%;
	border: 3px solid ${props => props.theme.grey};
	height: 125px;
	width: 125px;
	display: flex;
	justify-content: center;
	align-items: center;
	overflow: hidden;
	svg {
		fill: ${props => props.theme.grey};
		height: 100px;
		width: 100px;
	}
`;
