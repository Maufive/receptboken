import Link from "next/link";
import styled from "styled-components";

const NavigationBar = styled.ul`
	display: flex;
	padding: 0;
	margin: 0;
	width: 400px;
	justify-content: space-between;
	align-items: center;
`;

const NavItem = styled.li`
	color: ${props => (props.active ? props.theme.black : "#636363")};
	border-bottom: ${props => (props.active ? `2px solid ${props.theme.green}` : "")};
	list-style: none;
	font-weight: 700;
	p {
		margin: 0;
	}
`;

const Nav = () => (
	<NavigationBar>
		<NavItem active>
			<p>RECEPT</p>
		</NavItem>
		<NavItem>
			<p>TOPPLISTA</p>
		</NavItem>
		<NavItem>
			<p>KATEGORIER</p>
		</NavItem>
	</NavigationBar>
);

export default Nav;
