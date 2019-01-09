import styled from "styled-components";

export const SearchForm = styled.form`
	width: 500px;
	margin: 0 auto;
	> div {
		width: 100%;
		margin: 0 auto;
		background: ${props => props.theme.white};
		border-radius: 30px;
		border: 1px solid ${props => props.theme.lightgrey};
		display: flex;
		align-items: center;
		justify-content: space-between;
		position: relative;

		input[type="search"] {
			border-radius: 30px;
			width: 100%;
			border: none;
			padding: 0;
			outline: none;
			padding: 1.5rem;
			font-size: 1.5rem;
			svg {
				margin-right: 0.5rem;
				height: 15px;
				width: 15px;
				fill: ${props => props.theme.white};
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
	position: absolute;
	width: 100%;
	top: 105%;
	z-index: 10;
`;

export const DropdownItem = styled.li`
	background: ${props =>
		props.highlighted ? props.theme.offWhite : props.theme.white};
	width: 100%;
	padding: 1rem;
	display: flex;
	cursor: pointer;
	align-items: center;
	box-shadow: ${props => props.theme.bsHard};
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
