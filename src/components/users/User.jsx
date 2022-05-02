import { Link } from "react-router-dom"

export function User({user}){
    return (
			<div
				className="card shadow-lg mb-4"
				style={{ width: "25rem", backgroundColor: "#102340" }}
			>
				<div className="card-body">
					<h5 className="card-title text-light"> {user.name} </h5>
					<h6 className="card-subtitle mb-2 text-muted"> - {user.username} </h6>
					<p className="card-text text-light">
						<strong>Email</strong> : {user.email}
					</p>
					<p className="card-text text-light">
						<strong>Phone</strong> : {user.phone}
					</p>
					<p className="card-text text-light">
						<strong>City</strong> : {user.address.city}
					</p>
					<p className="card-text text-light">
						<strong>Company</strong> : {user.company.name}
					</p>
					<p className="card-text text-light">
						<strong>Website</strong> :{" "}
						<Link to="#" className="card-link">
							{user.website}
						</Link>
					</p>
					<Link to={`/${user.username}/posts/${user.id}`} className="btn btn-primary">
						Posts
					</Link>
				</div>
			</div>
		);
}