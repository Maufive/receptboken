import EditProfile from "../components/EditProfile";

const Editprofile = props => (
	<EditProfile
		setMessage={props.setMessage}
		query={props.query}
		user={props.user}
	/>
);

export default Editprofile;
