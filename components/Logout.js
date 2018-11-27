import Link from "next/link";

const logout = () => {
	localStorage.removeItem("jwtToken");
	window.location.reload();
};

const Logout = props => {
	return (
		<div>
			{localStorage.getItem("jwtToken") && (
				<button onClick={logout}>
					<Link href="/">
						<a>Logout</a>
					</Link>
				</button>
			)}
		</div>
	);
};

export default Logout;
