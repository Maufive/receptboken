import axios from "axios";
import React, { Component } from "react";
import Link from "next/link";
import styled from "styled-components";

const AuthorStyles = styled.div`
	a {
		margin-left: 0.5rem;
		color: ${props => props.theme.grey};
		transition: all 200ms ease-out;
		&:hover {
			color: ${props => props.theme.green};
		}
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
		axios.defaults.headers.common["Authorization"] =
			"Bearer " + localStorage.getItem("jwtToken");
		axios
			.get(`http://localhost:7777/user/profile/${this.props.id}`)
			.then(response => this.setState({ author: response.data }))
			.catch(error => console.log(error));
	};

	render() {
		if (!this.state.author) return null;
		return (
			<AuthorStyles>
				Uppladdat av:
				<Link
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
