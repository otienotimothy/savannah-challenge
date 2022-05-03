import { useState } from "react";

export function ChangeName() {
	const [name, setName] = useState("");

	const handleChange = (e) => setName(e.target.value);

	const handleSubmit = (e) => {
		e.preventDefault()
		console.log(name)
	}


	return (
		<div className="container my-5 d-flex justify-content-center align-items-center">
			<div style={{ width: "45rem" }} class="card border-0 shadow-lg">
				<div class="card-header bg-primary text-light">
					<h2>Change Name</h2>
				</div>
				<div style={{ backgroundColor: "#102340" }} class="card-body">
					<form onSubmit={handleSubmit}>
						<div class="mb-3">
							<label for="name" class="form-label text-light">
								Name
							</label>
							<input
								type="text"
								class="form-control"
								id="name"
								name="name"
								value={name}
								onChange={handleChange}
							/>
						</div>
						<button type="submit" class="btn btn-primary">
							Submit
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}
