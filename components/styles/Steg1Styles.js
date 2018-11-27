import styled from "styled-components";

export const RecipeForm = styled.form`
	margin: 0 auto;
	width: 600px;
	padding: 1rem;
	div {
		margin: 1.5rem 0;
	}
	select {
		font-size: 1.5rem;
		padding: 1.5rem;
	}
	select:focus {
		outline-color: ${props => props.theme.green};
	}
	input[type="text"] {
		width: 100%;
		height: 100%;
		padding: 0;
		outline: none;
		font-size: 1.5rem;
		padding: 1.5rem;
		border: 1px solid ${props => props.theme.offWhite};
		border-radius: 10px;
	}
	input[type="text"]:focus {
		border: 2px solid ${props => props.theme.green};
	}
	input[type="number"] {
		font-size: 1.5rem;
		margin: 1rem;
	}
	input[type="number"]:focus {
		outline-color: ${props => props.theme.green};
	}
	h3 {
		margin: 1.5rem auto;
		width: 600;
	}
`;

export const List = styled.ul`
	list-style: none;
`;

export const ListItemDiv = styled.div`
	
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin: 1.5rem 0;
	padding: 1.5rem 0;
	p {
		margin: 0;
	}
	
	i {
		color: ${props => props.theme.red};
		transition: 0.2s ease-in all;
		margin-left: 2rem;
		&:hover {
			cursor: pointer;
			transform: scale(1.1);
			box-shadow: ${props => props.theme.bs};
		}
	}

`;

export const Divider = styled.div`
	height: 3px;
	border-radius: 5px;
	width: 80%;
	background: ${props => props.theme.green};
	margin: 2rem auto;
`;
