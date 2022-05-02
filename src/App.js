import { QueryClientProvider, QueryClient } from "react-query"
import { BrowserRouter } from "react-router-dom";
import { Navbar } from "./components";
import {Home} from "./routes/Home"

function App() {

	let queryClient = new QueryClient()

	return (
		<QueryClientProvider client={queryClient} >
			<div style={{backgroundColor: "#0B192E", minHeight: "100vh"}}>
			<BrowserRouter>
				<Navbar />
				<Home />
			</BrowserRouter>
		</div>
		</QueryClientProvider>
		
	);
}

export default App;
