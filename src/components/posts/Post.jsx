
export function Post({ post }) {
	return (
		<div
			style={{ backgroundColor: "#102340", maxWidth: "60rem" }}
			className="card shadow-lg mb-3 mx-auto"
		>
			<div className="card-body">
				<h5 className="card-title text-light"> {post.title} </h5>
				<p className="card-text text-light">{post.body}</p>
			</div>
		</div>
	);
}
