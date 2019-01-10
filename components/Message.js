import { MessageStyles } from "./styles/Message";
// import HoldIcon from "../svg/hold.svg";
// import LikeIcon from "../svg/like-bold.svg";
// import InfoIcon from "../svg/info.svg";

export const Message = props => {
	let background;
	if (props.type === "success") background = "#F5F5F5";
	if (props.type === "danger") background = "#bc1616";
	if (props.type === "info") background = "#FFCF44";
	// Om det inte finns något meddelande så dölj komponenten
	if (!props.message) return null;
	return (
		<MessageStyles background={background}>
			<div>
				<i className="icofont-warning-alt" /> {props.message}
			</div>
		</MessageStyles>
	);
};
