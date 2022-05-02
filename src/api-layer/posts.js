import { api } from "./api"

export async function getUserPosts(userId){
    let result = await api.get(
			`https://jsonplaceholder.typicode.com/posts?userId=${userId}`
		);

    return result
}