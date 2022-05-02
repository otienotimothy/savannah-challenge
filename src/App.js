import { QueryClientProvider, QueryClient } from "react-query"
import { BrowserRouter , Routes, Route} from "react-router-dom";
import { Navbar } from "./components";
import {Home, Posts} from "./routes"

function App() {

	let queryClient = new QueryClient()

	return (
		<QueryClientProvider client={queryClient}>
			<div style={{ backgroundColor: "#0B192E", minHeight: "100vh" }}>
				<BrowserRouter>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/posts/:userId" element={<Posts />} />
					</Routes>
				</BrowserRouter>
			</div>
		</QueryClientProvider>
	);
}

export default App;
