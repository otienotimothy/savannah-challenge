import {User} from "./User"

export function Users({users}){
    return (
			<div className="container d-flex justify-content-evenly justify-content-md-around my-5 flex-wrap">
				{users.map((user) => (
					<User key={user.id} user={user} />
				))}
			</div>
		);
}