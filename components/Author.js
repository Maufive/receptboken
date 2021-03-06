import axios from "axios";
import React, { Component } from "react";
import Link from "next/link";
import styled from "styled-components";

const AuthorStyles = styled.div`
	margin: 1rem 0;
	a {
		margin-left: 1rem;
		color: ${props => props.theme.green};
		transition: all 200ms ease-out;
		border: 1px solid transparent;
		text-decoration: underline;
	}
`;

class Author extends Component {
	state = {
		author: null
	};

	componentDidMount() {
		this.getAuthor();
	}

	getAuthor = () => {
		const userid = this.props.id;
		axios.defaults.headers.common["Authorization"] =
			"Bearer " + localStorage.getItem("jwtToken");
		axios
			.get(`https://receptboken.herokuapp.com/user/profile/author/${userid}`)
			.then(response => this.setState({ author: response.data }))
			.catch(error => console.log(error));
	};

	render() {
		if (!this.state.author) return null;
		return (
			<AuthorStyles>
				Uppladdat av:
				<Link
					data-testid="author-link"
					href={{
						pathname: "/profile",
						query: {
							id: this.props.id
						}
					}}
				>
					<a>
						{this.state.author.fname} {this.state.author.lname}
					</a>
				</Link>
			</AuthorStyles>
		);
	}
}

export default Author;
