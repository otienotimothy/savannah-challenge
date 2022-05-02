import { api } from "./api"

export async function getUserPosts(userId){
    let result = await api.get(
			`https://jsonplaceholder.typicode.com/users/${userId}/posts`
		);

    return result
}