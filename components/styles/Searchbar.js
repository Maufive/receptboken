import styled from "styled-components";

export const Wrapper = styled.form`
	width: 500px;
	margin: 0 auto;
	height: 45px;
	background: ${props => props.theme.white};
	border-radius: 30px;
	border: 1px solid ${props => props.theme.lightgrey};
	display: flex;
	align-items: center;
	justify-content: space-between;

	input[type="text"] {
		width: 500px;
		height: 100%;
		border-radius: 30px;
		border: none;
		padding: 0;
		outline: none;
		padding: 1.5rem;
		font-size: 1.5rem;
	}
	button {
		background: ${props => props.theme.green};
		border: none;
		height: 38px;
		width: 80px;
		color: ${props => props.theme.white};
		border-radius: 30px;
		font-size: 1.5rem;
		margin-right: 0.5rem;
		transition: all 150ms ease-in;
		i {
			margin-right: 0.5rem;
		}
		&:hover {
			cursor: pointer;
			box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.25);
			transform: translateY(-1px);
			background: #1ac97a;
		}
	}
`;
