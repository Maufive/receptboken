import { MessageStyles } from "./styles/Message";

export const Message = props => {
	let background;
	if (props.type === "success") background = "#15BD76";
	if (props.type === "danger") background = "#bc1616";
	if (props.type === "info") background = "#FFCF44";
	// Om det inte finns något meddelande så dölj komponenten
	if (!props.message) return null;
	console.log(props);
	return (
		<MessageStyles background={background}>
			<div>
				<i className="icofont-warning-alt" /> {props.message}
			</div>
		</MessageStyles>
	);
};
