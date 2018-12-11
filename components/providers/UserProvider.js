import React, { Component } from "react";

const UserContext = React.createContext();

class UserProvider extends Component {
	constructor(props) {
		super(props);
		this.state = {
			user: null
		};
	}

	// Allt den här komponenten går ut på är att ha ett globalt state för user.
	// Funktionen setUser() går via props ner till index.js, för att utanför en renderProp.
	// Då kan jag redirecta från login, och använda jwt för att ropa på mitt userdata API,
	// och när data från api't kommer tillbaka så ropar jag på setUser, som sätter ett globalt
	// state här. Nu kan jag använda user-objektet över hela min applikation. Yay.

	setUser = obj => {
		console.log("hello?");
		this.setState({
			user: obj
		});
	};

	render() {
		return (
			<UserContext.Provider
				value={{
					user: this.state.user,
					setUser: this.setUser
				}}
			>
				{this.props.children}
			</UserContext.Provider>
		);
	}
}

const UserConsumer = UserContext.Consumer;

export default UserProvider;
export { UserConsumer };
