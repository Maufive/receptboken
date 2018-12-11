import React, { Component } from "react";
import Link from "next/link";
import { UserConsumer } from "../components/providers/UserProvider";
import NewRecipeForm from "../components/NewRecipeForm";
import LoginModal from "../components/LoginModal";

class recipe extends Component {
	render() {
		const { user, setMessage } = this.props;
		if (!user)
			return (
				<div style={{ width: "600px", margin: "0 auto" }}>
					<h2>För att lägga till recept - vänligen logga in</h2>
					<UserConsumer>
						{({ setUser }) => <LoginModal setUser={setUser} open={true} />}
					</UserConsumer>
					<Link href="/">
						<a>← Tillbaka till startsidan</a>
					</Link>
				</div>
			);
		return (
			<div>{user && <NewRecipeForm user={user} setMessage={setMessage} />}</div>
		);
	}
}

export default recipe;
