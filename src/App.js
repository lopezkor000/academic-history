import "./App.css";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";
import CurrentSemester from "./components/CurrentSemester/CurrentSemester";
import TopBar from "./components/TopBar";

function App() {
	return (
		<Router>
			<div className="container text-center">
				<TopBar />
				<Routes>
					<Route path="/current-semester" element={<CurrentSemester />} />
					<Route path="/academic-history" element={<h1>WORK IN PROGRESS</h1>} />
					<Route
						path="*"
						element={<Navigate to={"/current-semester"} replace={true} />}
					/>
				</Routes>
			</div>
		</Router>
	);
}

export default App;
