import React, { Component } from "react";
import Link from "next/link";
import axios from "axios";
import Logout from "../components/Logout";

class profile extends Component {
	constructor(props) {
		super(props);
		this.state = {
			user: null
		};
	}

	componentDidMount() {
		this.callApi();
	}

	callApi = async () => {
		axios.defaults.headers.common["Authorization"] =
			"Bearer " + localStorage.getItem("jwtToken");
		axios.get("http://localhost:7777/user/profile").then(res => {
			this.setState({ user: res.data });
		});
	};

	render() {
		const user = this.state.user;
		if (!user) return <p>Loading...</p>;
		return (
			<div>
				<p>Hello there, {user.username}</p>
				<br/>
				<Logout />
				<br/>
				<Link href="/"><a>Till startsidan</a></Link>
			</div>
		);
	}
}

export default profile;
