import React, { Component } from "react";
import axios from "axios";
import Moment from "react-moment";
import { Loading } from "../components/Loading";
import { ListContainer, List } from "../components/styles/ShoppinglistStyles";

class Inköpslista extends Component {
	state = {
		list: null
	};

	componentDidMount() {
		if (this.props.query) {
			this.getList();
		}
	}

	getList = () => {
		axios
			.get(`http://localhost:7777/lists/${this.props.query.id}`)
			.then(response => {
				this.setState({ list: response.data });
				console.log(response.data);
			})
			.catch(error => console.log(error));
	};

	render() {
		const { list } = this.state;
		if (!list) return <Loading />;
		return (
			<ListContainer>
				<h2>{list.title}</h2>
				<h3>
					Skapad: <Moment format="YYYY/MM/DD">{list.created}</Moment>
				</h3>
				<List>
					{list.list.map(item => (
						<li key={item._id}>
							{item.input} - {item.numberOfUnits} {item.units}
						</li>
					))}
				</List>
			</ListContainer>
		);
	}
}

export default Inköpslista;
