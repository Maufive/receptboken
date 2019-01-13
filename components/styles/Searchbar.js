import styled from "styled-components";
import { fadeIn } from "./keyframes";

export const SearchForm = styled.form`
	animation: ${fadeIn} 800ms ease 600ms 1 normal forwards running;
	opacity: 0;
	width: 50rem;
	margin: 3rem auto;
	position: relative;
	z-index: 1;
	@media (max-width: 550px) {
		width: 35rem;
	}
	> div {
		width: 100%;
		margin: 0 auto;
		background: ${props => props.theme.offWhite};
		border-radius: 30px;
		border: 2px solid ${props => props.theme.lightgrey};
		display: flex;
		align-items: center;
		justify-content: space-between;
		z-index: 2;
		input[type="search"] {
			border-radius: 30px;
			width: 100%;
			border: none;
			padding: 0;
			outline: none;
			padding: 1.5rem;
			font-size: 1.5rem;
			-webkit-appearance: none;
			z-index: 2;
			svg {
				margin-right: 0.5rem;
				height: 15px;
				width: 15px;
				fill: ${props => props.theme.offWhite};
			}
		}
		button {
			display: flex;
			align-items: center;
			justify-content: center;
			background: ${props => props.theme.green};
			border: none;
			height: 38px;
			width: 80px;
			color: ${props => props.theme.white};
			border-radius: 30px;
			font-size: 1.5rem;
			margin-right: 0.5rem;
			transition: all 150ms ease-in;

			&:hover {
				cursor: pointer;
				box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.25);
				transform: translateY(-1px);
				background: #1ac97a;
			}
		}
	}
`;

export const SuggestionsDropdown = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	top: 105%;
	-webkit-transform: translate3d(0, 0, 0);
	transform: translate3d(0, 0, 0);
	position: absolute;
	z-index: 2;
`;

export const DropdownItem = styled.li`
	background: ${props =>
		props.highlighted ? props.theme.lightgrey : props.theme.offWhite};
	width: 100%;
	padding: 1rem;
	display: flex;
	cursor: pointer;
	align-items: center;
	box-shadow: 2px 3px 3px 0px rgba(0, 0, 0, 0.2);
	border-left: 10px solid
		${props => (props.highlighted ? props.theme.green : "white")};
	${props => (props.highlighted ? "padding-left: 2rem;" : null)};
	transition: all 0.2s ease-out;
	> img {
		width: 5rem;
		height: 5rem;
		margin-right: 1rem;
	}
`;
