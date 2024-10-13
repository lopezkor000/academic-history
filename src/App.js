import "./App.css";
import CurrentSemester from "./components/CurrentSemester/CurrentSemester";
import TopBar from "./components/TopBar";

function App() {
	return (
		<div className="container text-center">
			<TopBar />
			<CurrentSemester />
		</div>
	);
}

export default App;
