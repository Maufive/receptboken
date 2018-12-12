import Router from "next/router";

const logout = () => {
	localStorage.removeItem("jwtToken");
	Router.push("/");
};

const Logout = props => {
	return <div>{props.user && <button onClick={logout}>Logout</button>}</div>;
};

export default Logout;
