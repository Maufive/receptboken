import RegisterComponent from "../components/Register";

const Register = props => {
	return (
		<RegisterComponent setMessage={props.setMessage} setUser={props.setUser} />
	);
};

export default Register;
