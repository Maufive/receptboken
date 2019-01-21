import React, { Component } from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroller";
import { UserConsumer } from "../components/providers/UserProvider";
import Jumbotron from "../components/Jumbotron";
import Searchbar from "../components/Searchbar";
import ReceptCard from "../components/ReceptCard";
import { Loading } from "../components/Loading";
import { CardContainer } from "../components/styles/Card";

class index extends Component {
	state = {
		user: null,
		recept: null,
		page: 1,
		hasMore: true
	};

	componentDidMount() {
		if (localStorage.jwtToken) {
			this.getUser();
		}
		this.loadRecipes();
		console.log(
			"Hej! 🙂 Kul att du ville spana in min App! Om du vill ge feedback eller kontakta mig spana in www.niklasalbinsson.se !"
		);
	}

	handleLoadMore = page => {
		// ta en kopia av recepten i state och lägg till de nya recepten
		axios
			.get(`https://receptboken.herokuapp.com/recipe/${page}`)
			.then(response => {
				// Kolla så det kommer tillbaka data från API't, annars bör inte funktionen köras
				if (response.data.length >= 1) {
					const oldState = [...this.state.recept];
					const recept = oldState.concat(response.data);
					this.setState(prevState => ({
						// recept: [...prevState.recept, response.data],
						recept,
						page: page + 1
					}));
				} else {
					// Gör så att funktionen som laddar recept via scroll inte körs när det tagit slut på recept
					this.setState({ hasMore: false });
				}
			})
			.catch(error => console.log(error));
	};

	loadRecipes = () => {
		const { page } = this.state;
		axios
			.get(`https://receptboken.herokuapp.com/recipe/${page}`)
			.then(response => {
				this.setState({ recept: response.data, page: page + 1 });
			})
			.catch(error => {
				this.props.setMessage("danger", "Oops! Något blev knas på servern");
				console.log(error);
			});
	};

	getUser = () => {
		axios.defaults.headers.common["Authorization"] =
			"Bearer " + localStorage.getItem("jwtToken");
		if (localStorage.jwtToken) {
			axios
				.get(`https://receptboken.herokuapp.com/user/profile`)
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
		if (!this.state.recept) return null;
		const { page, hasMore } = this.state;
		return (
			<div>
				<UserConsumer>
					{({ user, setUser }) => <Jumbotron user={user} setUser={setUser} />}
				</UserConsumer>
				<Searchbar />
				<InfiniteScroll
					pageStart={page}
					loadMore={() => this.handleLoadMore(page)}
					hasMore={hasMore}
					loader={<Loading />}
					key={this.state.recept._id}
				>
					<CardContainer>
						{this.state.recept.map(recept => (
							<ReceptCard
								id={recept._id}
								photo={recept.photo}
								timeRequired={recept.timeRequired}
								title={recept.title}
								reviews={recept.reviews}
								key={recept._id}
							/>
						))}
					</CardContainer>
				</InfiniteScroll>
			</div>
		);
	}
}

export default index;
