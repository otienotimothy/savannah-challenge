import spinner from "./giphy.gif"

export function Spinner(){
    return (
			<div className="d-flex justify-content-center align-items-center my-5">
				<img
					src={spinner}
					alt="spinner"
				/>
			</div>
		);
}