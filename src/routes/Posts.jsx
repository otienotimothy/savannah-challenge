import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getUserPosts } from "../api-layer/posts";

import { Post } from "../components";
import { Spinner } from "../components";

export function Posts() {
	const { userId, username } = useParams();

	const { isLoading, isError, data, error } = useQuery("posts", () =>
		getUserPosts(userId)
	);

	if (isLoading) {
		return <Spinner />
	}
	
	return (
		<div className="container">
			<Link className="btn btn-primary my-3 text-light" to="/">
				<i className="fa-solid fa-arrow-left-long me-2"></i> Back
			</Link>
			<h2 className="text-light my-3"> {username}'s Posts </h2>
            <hr className="bg-light" />
			{data.data.map((post) => (
				<Post key={post.id} post={post} />
			))}
		</div>
	);
}
