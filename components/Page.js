import React, { Component } from "react";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import { UserConsumer } from "./providers/UserProvider";
import { MessageConsumer } from "./providers/MessageProvider";
import Header from "./Header";
import Meta from "./Meta";
import { Message } from "./Message";
import { fadeIn } from "./styles/keyframes";

const theme = {
	green: "#15BD76",
	red: "#bc1616",
	yellow: "#FFCF44",
	black: "#393939",
	grey: "#5A5555",
	mediumgrey: "#828282",
	lightgrey: "#E1E1E1",
	offWhite: "#F5F5F5",
	white: "#fefefe",
	maxWidth: "1200px",
	mobileBreakpoint: "768px",
	mobileAnimationTime: "200ms",
	bs: "0 5px 24px 0 rgba(0, 0, 0, 0.06)",
	bsHard: "0 5px 12px 0 rgba(0, 0, 0, 0.10)",
	bRadius: "5px"
};

const StyledPage = styled.div`
	background: ${props => props.theme.offWhite};
	color: ${props => props.theme.black};
`;

const Inner = styled.div`
	max-width: ${props => props.theme.maxWidth};
	min-height: 100vh;
	margin: 0 auto;
	padding: 2rem;
	animation: ${fadeIn} 1000ms ease-out;
`;

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans');
	@import url("https://fonts.googleapis.com/css?family=Playfair+Display");
  html {
    box-sizing: border-box;
    font-size: 10px;
    font-family: 'Open Sans', Arial, Helvetica, sans-serif, sans-serif;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
  }
  a {
    text-decoration: none;
		color: ${theme.white};
		&:visited {
			color: ${theme.white};
		}
  }
  button {
		font-family: 'Open Sans';
		font-size: 1.5rem;
	}
	ul {
		padding: 0;
		margin: 0;
	}
	p {
		margin: 0;
	}
`;

class Page extends Component {
	render() {
		return (
			<ThemeProvider theme={theme}>
				<StyledPage>
					<GlobalStyle />
					<Meta />
					<UserConsumer>
						{({ user, setUser }) => <Header user={user} setUser={setUser} />}
					</UserConsumer>
					<MessageConsumer>
						{({ message, type }) => <Message type={type} message={message} />}
					</MessageConsumer>
					<Inner>{this.props.children}</Inner>
				</StyledPage>
			</ThemeProvider>
		);
	}
}

export default Page;
