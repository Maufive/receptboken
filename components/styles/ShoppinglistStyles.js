import styled from "styled-components";

export const List = styled.ul`
	list-style: none;
	font-size: 2rem;
	line-height: 2;
	a {
		color: ${props => props.theme.grey};
	}
	> div {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		margin-bottom: 1rem;
	}
	svg {
		fill: ${props => props.theme.green};
		height: 20px;
		width: 20px;
		border: 1px solid ${props => props.theme.green};
		padding: 4px;
		border-radius: 50%;
		cursor: pointer;
		transition: all 200ms ease-out;
		&:hover {
			fill: ${props => props.theme.white};
			background: ${props => props.theme.green};
			border: 1px solid ${props => props.theme.white};
		}
	}
`;

export const ListContainer = styled.div`
	background: ${props => props.theme.white};
	padding: 2rem 4rem;
	border-radius: 5px;
	min-width: fit-content;
	width: 500px;
	margin: 0 auto;
`;
