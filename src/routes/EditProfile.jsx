import { useState } from "react";
import { useMutation } from "react-query";
import { changeName } from "../api-layer/users";

export function ChangeName() {
	const [profile, setProfile] = useState({
		name: "",
	});

	const handleChange = (e) => setProfile({ [e.target.name]: e.target.value });

	const { isLoading, isError, mutate, error } = useMutation(() =>
		changeName(profile)
	);

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(profile);
		mutate(profile);
		console.log("After mutation..");
	};


	if (isError) {
		console.log(error);
	}

	return (
		<>
		{
			isLoading ? <h1> Loading...</h1> : ''
		}
			<div className="container my-5 d-flex justify-content-center align-items-center">
				<div style={{ width: "45rem" }} className="card border-0 shadow-lg">
					<div className="card-header bg-primary text-light">
						<h2>Change Name</h2>
					</div>
					<div style={{ backgroundColor: "#102340" }} className="card-body">
						<form onSubmit={handleSubmit}>
							<div className="mb-3">
								<label htmlFor="name" className="form-label text-light">
									Name
								</label>
								<input
									type="text"
									className="form-control"
									id="name"
									name="name"
									value={profile.name}
									onChange={handleChange}
									required
								/>
							</div>
							<button type="submit" className="btn btn-primary">
								Submit
							</button>
						</form>
					</div>
				</div>
			</div>
		</>
	);
}
