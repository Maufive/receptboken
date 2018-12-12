import React, { Component } from "react";
import axios from "axios";

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

	componentDidMount() {
		this.getUser();
	}

	setUser = obj => {
		this.setState({
			user: obj
		});
	};

	getUser = () => {
		axios.defaults.headers.common["Authorization"] =
			"Bearer " + localStorage.getItem("jwtToken");
		if (localStorage.jwtToken) {
			axios
				.get("http://localhost:7777/user/profile")
				.then(response => {
					// console.log(response.data.user);
					this.setState({ user: response.data.user });
				})
				.catch(error => {
					this.props.setMessage("danger", "Kunde inte hämta profil");
					console.log(error);
				});
		} else {
			return;
		}
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
