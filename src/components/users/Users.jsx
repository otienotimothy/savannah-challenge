import { User } from "./User";

export function Users({ users }) {
	let suiteUsers = users.filter((user) => user.address.suite.includes("Suite"));

	let aptUsers = users.filter((user) => user.address.suite.includes("Apt"));


	return (
		<>
			<div className="d-flex justify-content-evenly flex-wrap my-5" >
				<div
					style={{ width: "25rem", backgroundColor: "#102340" }}
					className="card mb-3"
				>
					<div className="card-header bg-primary text-light">
						{" "}
						User's Living a Suite{" "}
					</div>
					<div className="card-body">
						<p className="card-text text-light"> {suiteUsers.length}</p>
					</div>
				</div>
				<div
					style={{ width: "25rem", backgroundColor: "#102340" }}
					className="card mb-3"
				>
					<div className="card-header bg-primary text-light">
						User's Living in an Apartment
					</div>
					<div className="card-body">
						<p className="card-text text-light">{aptUsers.length}</p>
					</div>
				</div>
			</div>
			<div className="container d-flex justify-content-evenly justify-content-md-around my-5 flex-wrap">
				{users.map((user) => (
					<User key={user.id} user={user} />
				))}
			</div>
		</>
	);
}
