import { BrowserRouter } from "react-router-dom";
import { Navbar } from "./components";

function App() {
	return (
		<div style={{backgroundColor: "#0B192E", minHeight: "100vh"}}>
			<BrowserRouter>
				<Navbar />
			</BrowserRouter>
		</div>
	);
}

export default App;
