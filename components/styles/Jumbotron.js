import styled from "styled-components";

export const customStyles = {
	content: {
		top: "50%",
		left: "50%",
		right: "auto",
		bottom: "auto",
		marginRight: "-50%",
		transform: "translate(-50%, -50%)"
	}
};

export const StyledJumbotron = styled.div`
	margin: 0 auto;
	width: 800px;
	text-align: center;
	font-family: "Playfair Display";
`;

export const LoginContainer = styled.div`
	display: flex;
	justify-content: space-around;
`;
