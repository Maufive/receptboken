import { MessageStyles, SuccessMessageStyles, InfoMessageStyles, DangerMessageStyles } from "./styles/Message";

export const SuccessMessage = props => {
	return (
		<SuccessMessageStyles>
			<div>
				<i className="icofont-warning-alt" /> {props.children}
			</div>
		</SuccessMessageStyles>
	);
};

export const InfoMessage = props => {
	return (
		<InfoMessageStyles>
			<div>
				<i className="icofont-warning-alt" /> {props.children}
			</div>
		</InfoMessageStyles>
	);
};


