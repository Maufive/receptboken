import styled from "styled-components";

export const Button = styled.button`
	display: inline-block;
	width: ${props => (props.fullWidth ? "100%" : "")};
	border-radius: 5px;
	padding: 1rem 4rem;
	margin: 1.5rem 0;
	background: ${props => (props.primary ? props.theme.green : "transparent")};
	color: ${props => (props.primary ? props.theme.white : props.theme.green)};
	border: 1px solid
		${props => (props.primary ? "transparent" : props.theme.lightgrey)};
	outline: none;
	box-shadow: ${props => props.theme.bs};
	font-weight: 700;
	transition: 0.1s ease-in all;
	cursor: pointer;
	a {
		color: ${props => (props.primary ? props.theme.white : props.theme.green)};
	}
	i {
		margin-right: 1rem;
	}
	&:hover {
		color: ${props => props.theme.white};
		box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.25);
		transform: translateY(-1px);
		background: #1ac97a;
		border: 1px solid #1ac97a;
	}
`;

export const DisabledButton = styled(Button)`
	color: ${props => props.theme.lightgrey};
	margin: 1.5rem 0;
	&:hover {
		color: ${props => props.theme.lightgrey};
		background: ${props => props.theme.offWhite};
	}
`;
