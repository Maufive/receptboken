import Link from "next/link";
import Router from "next/router";
import styled from "styled-components";
import Nav from "./Nav";

const Logo = styled.h1`
  font-family: "Playfair Display";
  font-weight: 400;
	margin: 0;
`;
const StyledHeader = styled.header`
	.bar {
		display: flex;
		justify-content: space-between;
    align-items: center;
		padding: 0 2rem;
    height: 75px;
    width: ${props => props.theme.maxWidth};
    margin: 0 auto;
		@media (max-width: 1300px) {
		}
    @media (max-width: ${props => props.theme.mobileBreakpoint}) {
      height: 40px;
    }
	}
	.sub-bar {
		display: grid;
		grid-template-columns: 1fr auto;
		border-bottom: 1px solid ${props => props.theme.lightgrey};
	}
`;

const UserItem = styled.h3`
	margin: 0;
`;

const Header = () => (
	<StyledHeader>
		<div className="bar">
			<Logo>
				<Link href="/">
					<a>Receptboken</a>
				</Link>
			</Logo>
			<Nav />
			<UserItem>Niklas Albinsson</UserItem>
		</div>
	</StyledHeader>
);

export default Header;
