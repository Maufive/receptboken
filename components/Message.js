import React from "react";
import { MessageStyles } from "./styles/Message";
import SuccessIcon from "../svg/success.svg";
import WarningIcon from "../svg/warning.svg";
import DangerIcon from "../svg/hold.svg";

export const Message = props => {
	let background;
	let icon;
	if (props.type === "success") background = "#F5F5F5";
	if (props.type === "danger") background = "#bc1616";
	if (props.type === "info") background = "#FFCF44";
	// Om det inte finns något meddelande så dölj komponenten
	if (props.type === "success") {
		icon = <SuccessIcon />;
	} else if (props.type === "info") {
		icon = <WarningIcon />;
	} else {
		icon = <DangerIcon />;
	}

	if (!props.message) return null;
	return (
		<MessageStyles background={background}>
			<div>
				{icon} {props.message}
			</div>
		</MessageStyles>
	);
};
