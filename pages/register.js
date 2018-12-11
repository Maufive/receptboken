import RegisterComponent from "../components/Register";
import { MessageConsumer } from "../components/providers/MessageProvider";

const Register = props => {
	return <RegisterComponent setMessage={props.setMessage} />;
};

export default Register;
