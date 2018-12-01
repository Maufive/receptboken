import { MessageStyles } from "./styles/Message";

export const Message = props => {
	let background;
	if (props.type === "success") background = "#15BD76";
	if (props.type === "danger") background = "#bc1616";
	if (props.type === "info") background = "#FFCF44";
	return (
		<MessageStyles background={background}>
			<div>
				<i className="icofont-warning-alt" /> {props.children}
			</div>
		</MessageStyles>
	);
};
