import styled from "styled-components";

export const Logo = styled.h2`
	margin: 0;
	margin-block-end: 0;
	margin-block-start: 0;
	color: ${props => props.theme.offWhite};
	font-family: "Proza Libre";
	font-weight: 700;
	letter-spacing: 1px;
	font-size: 2rem;
`;
export const StyledHeader = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 1rem 2rem;
	height: 6rem;
	background: rgb(21, 189, 118);
	background: linear-gradient(
		90deg,
		rgba(21, 189, 118, 1) 0%,
		rgba(154, 202, 60, 1) 100%
	);
	width: 100%;
	margin-bottom: 3rem;
	> div > a {
		display: flex;
		align-items: center;
		padding: 0;
		svg {
			height: 3rem;
			width: 3rem;
			margin-right: 0.5rem;
		}
	}
`;

export const ButtonContainer = styled.div`
	width: 50%;
	display: flex;
	flex-direction: column;
	align-items: flex-end;
`;
