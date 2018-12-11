import styled, { keyframes } from "styled-components";

const StarAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  20% {
    transform: scale(1.2);
  }
  50% {
    transform: scale(1.5);
  }
  70% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
`;

export const StarsForm = styled.form`
	margin-right: 3rem;
	display: flex;
	align-items: center;
	> div {
		display: flex;
		justify-content: center;
		margin-right: 1rem;
		input {
			display: none;
			&:checked {
				& ~ label {
					color: ${props => props.theme.yellow};
					will-change: transform;
					animation: ${StarAnimation} 0.25s cubic-bezier(0, 1.02, 1, 0.02);
				}
			}
			& + label {
				font-size: 0;
				&:before {
					content: "★";
					font-size: 2rem;
				}
				/* 
          Dessa är i motsatt DOM-ordning.
          Omarrangerar dem för att visuellt vara i vanlig ordning
        */
				&[for="star5"] {
					order: 5;
				}
				&[for="star4"] {
					order: 4;
				}
				&[for="star3"] {
					order: 3;
				}
				&[for="star2"] {
					order: 2;
				}
				&[for="star1"] {
					order: 1;
				}
				&:hover,
				&:hover ~ label {
					color: ${props => props.theme.yellow};
				}
			}
		}
	}
	button {
		font-size: 1rem;
		cursor: pointer;
		border: 1px solid ${props => props.theme.green};
		border-radius: 3px;
		font-weight: 700;
		color: ${props => props.theme.green};
		padding: 0.5rem 1rem;
		transition: all 250ms ease-out;
		&:hover {
			background: ${props => props.theme.green};
			color: ${props => props.theme.white};
		}
	}
`;
