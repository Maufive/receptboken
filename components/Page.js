import React, { Component } from "react";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import Header from "./Header";
import Meta from "./Meta";

const theme = {
	green: "#15BD76",
	red: "#bc1616",
	black: "#393939",
	grey: "#3A3A3A",
	lightgrey: "#E1E1E1",
	offWhite: "#EDEDED",
	white: "#fefefe",
	maxWidth: "1200px",
	mobileBreakpoint: "768px",
	bs: "0 5px 24px 0 rgba(0, 0, 0, 0.06)"
	// bs: "0 12px 24px 0 rgba(0, 0, 0, 0.09)"
};

const StyledPage = styled.div`
	background: ${props => props.theme.white};
	color: ${props => props.theme.black};
`;

const Inner = styled.div`
	max-width: ${props => props.theme.maxWidth};
	margin: 0 auto;
	padding: 2rem;
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
    color: ${theme.black};
  }
  button {
		font-family: 'Open Sans';
		font-size: 1.5rem;
	}
	ul {
		padding: 0;
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
					<Header />
					<Inner>{this.props.children}</Inner>
				</StyledPage>
			</ThemeProvider>
		);
	}
}

export default Page;
