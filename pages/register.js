import RegisterComponent from "../components/Register";

const Register = props => {
	return <RegisterComponent setMessage={props.setMessage} />;
};

export default Register;
