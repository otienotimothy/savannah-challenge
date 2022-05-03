import {useQuery} from 'react-query'
import { getUsers } from "../api-layer/users"
import { Users, Spinner } from "../components"

export function Home(){

    const {isError, isLoading, data, error} = useQuery('users', getUsers)

    if (isLoading){
        return (
                <Spinner />
				);
    }

    return <Users users={data.data} />
}