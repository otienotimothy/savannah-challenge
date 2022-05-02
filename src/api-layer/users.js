import {api} from './api'

export async function getUsers(){
    let result = await api.get()
    return result;
}