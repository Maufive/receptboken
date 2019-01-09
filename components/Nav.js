import Router from "next/router";
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
	/* color: ${props => (props.active ? props.theme.black : "#636363")}; */
	color: ${props => props.theme.offWhite};
	border-bottom: ${props =>
		props.active ? `2px solid ${props.theme.green}` : ""};
	list-style: none;
	font-weight: 700;
	letter-spacing: 1px;
	p {
		margin: 0;
	}
`;

/*
	MATVECKAN: 
	En funktion där jag hämtar ut 3 - 5 olika recept från databasen och sätter ihop en shoppinglista med alla ingredienser.
	Som Matkassen ;)
*/

const Nav = () => (
	<NavigationBar>
		<NavItem active onClick={() => Router.push("/")}>
			<p>RECEPT</p>
		</NavItem>
		<NavItem>
			<p>MATVECKAN</p>
		</NavItem>
		<NavItem>
			<p>TOPPLISTA</p>
		</NavItem>
	</NavigationBar>
);

export default Nav;
