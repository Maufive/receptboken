import SingleRecept from "../components/SingleRecept";

const Recept = props => (
	<div>
		<SingleRecept
			id={props.query.id}
			user={props.user}
			setUser={props.setUser}
		/>
	</div>
);

export default Recept;
