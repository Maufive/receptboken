import styled, { keyframes } from "styled-components";

const Animation = keyframes`
  to { -webkit-transform: rotate(360deg); }
`;

const Spinner = styled.div`
	margin: 0 auto;
	display: inline-block;
	width: 50px;
	height: 50px;
	border: 3px solid rgba(255, 255, 255, 0.3);
	border-radius: 50%;
	border-top-color: green;
	animation: ${Animation} 1s ease-in-out infinite;
	-webkit-animation: ${Animation} 1s ease-in-out infinite;
`;

const SmallSpinner = styled(Spinner)`
	width: 15px;
	height: 15px;
`;

export const Loading = () => <Spinner />;

export const SmallLoading = () => <SmallSpinner />;
