import { Link } from "react-router-dom";

export function Navbar() {
	return (
		<nav style={{ backgroundColor: "#102340" }} className="navbar navbar-dark">
			<div className="container">
				<Link to="/" className="navbar-brand">
					Savannah Challenge
				</Link>
			</div>
		</nav>
	);
}
