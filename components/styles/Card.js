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
	span {
		color: ${props => props.theme.grey};
		display: flex;
		align-items: center;
	}

	svg {
		height: 20px;
		width: 20px;
		fill: ${props => props.theme.grey};
		margin-right: 0.5rem;
	}
`;

export const SmallCard = styled.div`
	width: 200px;
	background: ${props => props.theme.white};
	box-shadow: ${props => props.theme.bsHard};
	transition: all 150ms ease-in;

	> div {
		h4 {
			margin: 0;
		}
		padding: 0 1rem;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
	}
`;

export const CardContainer = styled.div`
	display: flex;
	width: 1000px;
	flex-wrap: wrap;
	justify-content: space-evenly;
	margin: 0 auto;
	padding: 2rem;
	h2,
	h3 {
		margin: 0;
		text-align: center;
	}
	> div {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
`;
