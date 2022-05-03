import {api} from './api'

export async function getUsers(){
    let result = await api.get("https://jsonplaceholder.typicode.com/users");
    return result;
}

export async function changeName(userId, profile){

    let config = {
        headers : {
            'Content-Type': 'application/json'
        }
    }

    return await api.patch(
			`https://jsonplaceholder.typicode.com/users/${userId}`, JSON.stringify(profile), config
		);

    
}