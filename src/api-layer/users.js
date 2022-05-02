import {api} from './api'

export async function getUsers(){
    let result = await api.get("https://jsonplaceholder.typicode.com/users");
    return result;
}