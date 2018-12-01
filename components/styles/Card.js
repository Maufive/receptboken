import styled from "styled-components";

export const Card = styled.div`
	width: 250px;
	margin-bottom: 2rem;
	margin-right: 2rem;
	background: ${props => props.theme.white};
	box-shadow: ${props => props.theme.bsHard};
	transition: all 150ms ease-in;
	h3 {
		text-align: center;
		color: ${props => props.theme.grey};
	}
	> div {
		height: 50px;
		display: flex;
		justify-content: space-around;
	}
	&:hover {
		box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.25);
		transform: translateY(-2px);
	}
`;
