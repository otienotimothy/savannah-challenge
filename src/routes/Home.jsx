import {useQuery} from 'react-query'
import { getUsers } from "../api-layer/users"
import { Users } from "../components"

export function Home(){

    const {isError, isLoading, data, error} = useQuery('users', getUsers)

    if (isLoading){
        return <h1>Loading...</h1>
    }else {
        console.log(data)
    }

    return <Users users={data.data} />
}