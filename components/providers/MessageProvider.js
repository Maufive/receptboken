import React, { Component } from "react";

const MessageContext = React.createContext();

class MessageProvider extends Component {
	constructor(props) {
		super(props);
		this.state = {
			type: null,
			message: null
		};
	}

	hideShowMessage = (type, message) => {
		this.setState({ type, message });
		setTimeout(() => {
			this.setState({ type: null, message: null });
		}, 3990);
	};

	setMessage = (type, message) => {
		this.hideShowMessage(type, message);
	};

	setType = type => {
		this.setState({ type });
	};

	render() {
		return (
			<MessageContext.Provider
				value={{
					message: this.state.message,
					setMessage: this.setMessage,
					setType: this.setType,
					type: this.state.type
				}}
			>
				{this.props.children}
			</MessageContext.Provider>
		);
	}
}

const MessageConsumer = MessageContext.Consumer;

export default MessageProvider;
export { MessageConsumer };
