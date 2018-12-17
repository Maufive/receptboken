import SavedRecipes from "../components/SavedRecipes";

const Saved = props => {
	const { user, setMessage } = props;
	return (
		<div>
			<SavedRecipes user={user} setMessage={setMessage} />
		</div>
	);
};

export default Saved;
