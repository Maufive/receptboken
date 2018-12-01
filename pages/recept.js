import SingleRecept from "../components/SingleRecept";

const Recept = props => (
	<div>
		<SingleRecept id={props.query.id} />
	</div>
);

export default Recept;
