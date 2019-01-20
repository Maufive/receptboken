import React, { Component } from "react";
import axios from "axios";
import Moment from "react-moment";
import { Loading } from "../components/Loading";
import { ListContainer, List } from "../components/styles/ShoppinglistStyles";
import { Button } from "../components/styles/Button";
import MailIcon from "../svg/mail.svg";

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
			.get(`https://receptboken.herokuapp.com/lists/${this.props.query.id}`)
			.then(response => {
				this.setState({ list: response.data });
			})
			.catch(error => console.log(error));
	};

	sendMail = e => {
		e.preventDefault();
		const id = this.state.list._id;
		console.log(id);
		axios
			.post(`https://receptboken.herokuapp.com/lists/sendmail`, { id })
			.then(response => {
				console.log(response.data);
			})
			.catch(error => console.log(error));
	};

	render() {
		const { list } = this.state;
		if (!list) return <Loading />;
		return (
			<ListContainer>
				<h1>{list.title}</h1>
				<h3>
					Skapad: <Moment format="YYYY/MM/DD">{list.created}</Moment>
				</h3>
				<Button
					onClick={this.sendMail}
					primary
					// style={{ background: "#e4572e" }}
				>
					<MailIcon />
					Maila inköpslistan
				</Button>
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
